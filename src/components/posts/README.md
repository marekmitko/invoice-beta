### Handling Relationships
https://marmelab.com/react-admin/doc/4.0/Tutorial.html#handling-relationships

{
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    "userId": 1
}

W JSONPlaceholder każdy rekord post zawiera pole userId, które wskazuje user:

React-admin wie, jak wykorzystać te obce klucze do pobierania referencji. 
Zobaczmy, jak ListGuesser zarządza nimi, tworząc nowy <Resource> dla punktu końcowego interfejsu API /posts:

ListGuesser sugeruje użycie <ReferenceField> dla pola userId. 
Pobawmy się tym nowym polem, tworząc komponent PostList na podstawie kodu zrzuconego przez zgadującego:

#### ReferenceField 
 
 
  W zasobie dzięki iteracji Datagrid przekazujemy po jednym - record - z zasobu db-post 
  1. record - zawiera key - "userId"
              np.   {
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                    "userId": 1
                    }
    2. Przez komponent ReferenceField - określamy zasób - punkt końcowy API - tutaj users: [{id ...}, {id ...} ...]
    3.  PostList.props.source="userId" - definiuje konkretny obj - tj konkretny - record - zasobu users
    4.      ReferenceField.props.source - definiuje pod którym key jest wartość którą chcemy wyświetlić 
 * 
 */

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