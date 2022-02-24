
### MyFieldCustomComponent
    ra-field component:  simple field React component 

    MyCustomField
    1. Pobierają - record - za pomocą useRecordContext() - customHook for React-Admin
                    record tzn. db-object-user ex. { "id": 2, "name": "Ervin Howell", "website": "anastasia.net", ... }
    2. Następnie używają props.source
                    source - precyzuje dokładny key - w obj record 
                                przez co komponent wie jaką wartość ma wyświetlić/pokazać
    3. MyCustomField - zwraca / wyświetla wartość poprzez ścieżkę 
                        record => source === output key.value 
*/


// TO READING: https://marmelab.com/react-admin/doc/4.0/Fields.html

const MyUrlField = ({ source }) => {
    const record = useRecordContext();
    return record ? (
        <a href={record[source]}>
            {record[source]}
        </a>
    ) : null;
}
// export default FOR MyCustomReusableComponent ! 
export default MyUrlField;