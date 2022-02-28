
## ??? sprawdzić po co jest
rowClick="edit"
<Datagrid rowClick="edit" >


### <List> vs <ReferenceField>
Zarówno <List> jak i <Reference...> są odpowiedzialne za pobieranie i przygotowywanie danych oraz delegowanie renderowania do swoich dzieci 
a. przekazują record do children 
b. children odpowiada za render 

<List> (poza pobierania informacji z API)
- ponadto  
    * wyświetlanie tytułu strony 
    * obsługuje paginacje
    * następnie deleguje wyświetlanie rzeczywistej listy użytkowników do - swojego child - tj. <Datagrid>


<Datagrid>
     renderuje tabelę z jednym wierszem dla każdego rekordu
        Datagrid.Children => określają konkretne key.value - do wyświetlenia 


### Info 
        Wskazówka: Spójrz ponownie na kartę sieciową przeglądarki: 
            react-admin deduplikuje żądania dla użytkowników i agreguje je, aby wysłać tylko jedno żądanie HTTP do punktu końcowego /users dla całej sieci Danych. 
            To jedna z wielu optymalizacji, które sprawiają, że interfejs użytkownika jest szybki i responsywny.


### Edit 
    Jeśli zrozumiałeś komponent <List>, komponent <Edit> nie będzie zaskoczeniem. 
    Jest odpowiedzialny za pobieranie rekordu i wyświetlanie tytułu strony. 

    Przekazuje rekord do składnika <SimpleForm>,
    który jest odpowiedzialny za układ formularza, 
    wartości domyślne i sprawdzanie poprawności. 

### <SimpleForm>
     który jest odpowiedzialny
     - za układ formularza, 
     - wartości domyślne 
     - sprawdzanie poprawności. 

     - używa swoich elementów podrzędnych 
        do określenia danych wejściowych formularza do wyświetlenia.

    Oczekuje składników wejściowych jako dzieci. <TextInput>,
     <ReferenceInput> i <SelectInput> są takimi wejściami.
