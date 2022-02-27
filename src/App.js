import * as React from "react";
import { Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from "./components/users/UserList";
import { PostList } from "./components/posts/PostList";
import { PostEdit } from "./components/posts/PostEdit";
import { PostCreate } from "./components/posts/PostCreate";
import { UserEdit } from "./components/users/UserEdit";

import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
function App() {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource name="posts" icon={PostIcon} list={PostList} edit={PostEdit} create={PostCreate} />
            <Resource name="users" icon={UserIcon} list={UserList} edit={UserEdit} />   
        </Admin>
    );
}

export default App;
