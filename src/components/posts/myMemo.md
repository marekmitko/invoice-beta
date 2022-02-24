
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