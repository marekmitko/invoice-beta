
### baseInfo

    Filtry są „wyszukiwane podczas pisania”, co oznacza, że ​​gdy użytkownik wprowadzi nowe wartości w formularzu filtra, lista zostanie natychmiast odświeżona (poprzez żądanie API).

    //Wskazówka : pamiętaj, że tej labelwłaściwości można użyć w dowolnym polu, aby dostosować etykietę pola.


### Question 
/*
    ?ver Sprawdzić takie rozwiązaniae 
    export const postFilters = [
        <TextInput source="q" label="Search" alwaysOn />,
        <ReferenceInput source="userId" label="User" reference="users">
            <SelectInput optionText="name" />
        </ReferenceInput>,
        *see Widok działa - wyświetla się - ale funkcjonalność nie działa prawidłowo
        <ReferenceInput source="title" label="Title" reference="posts">
            <SelectInput optionText="title" />
        </ReferenceInput>,
];

*/


### Reference Field 
<ReferenceField>sam komponent nie wyświetla niczego. Po prostu pobiera dane referencyjne i przekazuje je jako a recorddo swojego komponentu podrzędnego ( <TextField>w naszym przypadku). Podobnie jak <List>komponent, wszystkie <Reference>komponenty są odpowiedzialne tylko za pobieranie i przygotowywanie danych oraz delegują renderowanie do swoich dzieci.