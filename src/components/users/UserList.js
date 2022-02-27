import * as React from "react";
import { List, Datagrid, TextField, EmailField, UrlField, EditButton } from 'react-admin';

import MyUrlField  from "../custom/reusable/fields/MyUrlField"

export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <UrlField source="website" />
            <MyUrlField source="website" />
            <TextField source="company.name" />
            <EditButton />
        </Datagrid>
    </List>
);