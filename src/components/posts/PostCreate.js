import * as React from "react";
import {
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
} from 'react-admin';

export const PostCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);