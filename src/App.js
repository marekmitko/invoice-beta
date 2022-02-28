import * as React from "react";
import { Admin, Resource, ListGuesser} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from "./components/users/UserList";
import { PostList } from "./components/posts/PostList";
import { PostEdit } from "./components/posts/PostEdit";
import {PostCreate} from "./components/posts/PostCreate";
import { UserEdit } from "./components/users/UserEdit";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
function App() {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource name="posts" list={ListGuesser} /> 
            {/* <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />    */}
            <Resource name="users" list={UserList} edit={UserEdit}  />   
            {/* <Resource name="users" list={ListGuesser}  />    */}
        </Admin>
    );
}

export default App;
