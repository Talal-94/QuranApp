import React from 'react'
import './App.css'
import Counter from './Component/Counter'
import Table from './Component/Table'
import DataFetching from './Component/DataFetching'
import QuranFetch from './Component/QuranFetch'
function App () 
{
  return (
    <>
    {/* COUNTER
    <h1>Counters</h1>
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
    TABLE
    <br/>
    <br/>
    <hr/>
    <h1>Editable Table</h1>
    <Table />
    DATA FETCHING (useEffect)
    <br/>
    <br/>
    <hr/>
    <h1>Data fetching</h1>
    <DataFetching />
    <br/> */}

  <QuranFetch />
    </>
  )
}

export default App;
