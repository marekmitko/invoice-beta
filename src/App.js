import * as React from "react";
import { Admin } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';


const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
// działa 
function App() {
  return (
    <div className="App">
      <Admin dataProvider={dataProvider} /> 
    </div>
  );
}

export default App;
