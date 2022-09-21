import React from 'react';
import './App.css';
import Counter from './Component/Counter';
import Table from './Component/Table';

function App () 
{
  return (
    <>
    {/* COUNTER */}
    <Counter/>
    <br/>
    <br/>
   <Counter init = { 3 } value = { 1 }/>
   <br/>
   <br/>
   <Counter init = { 10 } value = { 5 }/>
   <br/>
   <br/>
   <Counter init = { 50 } value = { 10 }/>
   {/* TABLE */}
   <br/>
   <br/>
   <hr/>
   <Table />
    </>
  );
}

export default App;
