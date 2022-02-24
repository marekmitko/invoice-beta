import * as React from "react";
import { Admin } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
//Making Contact With The API Using a Data Provider
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
function App() {
  return (
    <div className="App">
      <Admin dataProvider={dataProvider} /> 
    </div>
  );
}

export default App;
