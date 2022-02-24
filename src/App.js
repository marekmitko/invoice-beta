import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from "./components/users/UserList";
import { PostList } from "./components/posts/PostList";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
function App() {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource name="posts" list={PostList} />
            <Resource name="users" list={UserList} />
        </Admin>
    );
}

export default App;
