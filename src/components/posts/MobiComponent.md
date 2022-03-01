###
Po pierwsze, powinieneś wiedzieć, że nie musisz używać <Datagrid>komponentu jako <List>dziecka. Możesz użyć dowolnego innego komponentu, który ci się podoba. Na przykład <SimpleList>składnik:


// in src/posts.js
import * as React from "react";
import { List, SimpleList } from 'react-admin';

export const PostList = () => (
    <List>
        <SimpleList
            primaryText={record => record.title}
            secondaryText={record => `${record.views} views`}
            tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
        />
    </List>
);