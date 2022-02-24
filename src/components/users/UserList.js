import * as React from "react";
import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';

import MyUrlField  from "../custom/reusable/fields/MyUrlField"

// POWINIENEM TO PRZEROBIĆ NA STANDARDOWĄ FUNKCJĘ 
// albo może i nie bo to jest przekazane poprzez props - Resource.props.list.UserList
export const UserList = () => (
    //list pobiera db-data-user z api 
    //podbiera informacje z API
    // odp za wyświetlanie tytułu strony 
    //obsługę paginacji 
    // => deleguje wyświetlanie rzeczywistej data user list do elementu podrzędnego - Datagrid
        // =>Datagrid używa swoich składników podrzędnych (tutaj lista <TextField> i <EmailField>) do określenia kolumn do renderowania. 
        // Każdy składnik Field mapuje inne pole w odpowiedzi interfejsu API, określone przez source.
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <UrlField source="website" />
            <MyUrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);