import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';
import {postFilters} from "./postFilters";

// https://marmelab.com/react-admin/doc/4.0/Tutorial.html#handling-relationships




export const PostList = () => (
    <List filters={ postFilters } >
        <Datagrid>
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <EditButton />
        </Datagrid>
    </List>
);