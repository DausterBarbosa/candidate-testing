import React, { useState, useEffect } from 'react';
import './App.css';

import {List, ListItem} from "./components/UserList";

const App = () => {

  const [users, setUsers] = useState([]);
  
  const fetchUserIds = async () => {
    return ["john.smith", "sara.lee", "jack.ma"];
  };

  const checkStatus = async (userId) => {
    return Math.random() > 0.8
      ? { status: "offline", id: userId }
      : { status: "online", id: userId };
  };

  const sendEmail = async (userId) => {
    // return if it was sucessfull or not
    return Math.random() > 0.1 ? true : false;
  };

  useEffect(() => {
    async function handlerUsers(){

      const loadUsers = await fetchUserIds();

      loadUsers.map(async (user) => {

        const {status} = await checkStatus(1);

        if(status.localeCompare("online") === 0){
          const emailStatus = await sendEmail(1);

          if(emailStatus) setUsers(users => [...users, user]);
        }
      });
    }

    handlerUsers();
  }, []);

  /*
    Question 1: 
    Find all online users and send them emails. Render the users for which the emails were successfully sent

    Step 1: Load users
    Step 2: Check users online
    Step 3: Send email for whom are online
    Step 4: Render those which the email was successfully sent
  
  */

  return (
    <div className="App">
      <div className="App-header">
        <div>
          All online users that introductions were sucessfully sent
          <List>
            {users.map((user, index) => <ListItem key={index}>{user}</ListItem>)}
          </List>
        </div>
      </div>
    </div>
  );
}

export default App;
