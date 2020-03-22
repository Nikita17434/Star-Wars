import React from 'react';
import { useEffect,useState,useCallback } from 'react';
import { Panel } from './panel';
import { List } from './list';
import {Actors} from './actors';
import './app.css';

export const App = () => {
  const [state, setState] = useState ({});

  const [currentPage, setCurrentPage] = useState(0);

    useEffect(()=> {
     fetch("https://swapi.co/api/films/")
     .then(res => res.json())
     .then(
       (result) =>{
         setState(result);
       },
       (error) => console.log(error)
       ) 
    },[])
    console.log(state)
    const getPage = useCallback(() => {
      switch(currentPage) {
        case 0: return <List info={state}/>
        case 1:return < Actors />
      }
    },[currentPage, state])
  return (
  <div className="container">
    <Panel 
    setCurrentPage={setCurrentPage}
    currentPage={currentPage}>
    </Panel>
    { getPage() }
    </div>);
  
}
export default App;
