import React from 'react';
import { useEffect,useState } from 'react';
import { Panel } from './panel';
import { List } from './list';
import './app.css';

export const App = () => {
  const [state, setState] = useState ({});
    useEffect(()=> {
     fetch("https://swapi.co/api/films/2/")
     .then(res => res.json())
     .then(
       (result) =>{
         setState(result);
       },
       (error) => console.log(error)
       ) 
    },[])
    console.log(state)
  return (
  <div className="container">
    <Panel></Panel>
    <List info={state}></List>
    </div>);
    
}
export default App;
