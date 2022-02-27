import * as React from "react";
import { ReferenceInput, SelectInput, TextInput } from "react-admin";


export const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users">
        <SelectInput optionText="name" />
    </ReferenceInput>,
];