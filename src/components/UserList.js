import styled from "styled-components";

export const List = styled.ul`
    list-style: none;
`;

export const ListItem = styled.li`
    padding: 10px;
    border-radius: 7px;
    background: #EEE;

    & + & {
        margin-top: 10px;
    }
`;