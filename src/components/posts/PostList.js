import * as React from "react";
import { List, Datagrid, TextField, ReferenceField } from 'react-admin';

// https://marmelab.com/react-admin/doc/4.0/Tutorial.html#handling-relationships

export const PostList = () => (
    <List>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);