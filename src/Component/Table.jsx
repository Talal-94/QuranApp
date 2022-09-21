import React, { useState } from 'react'

 
  function Table( ) 
  {
    const  [ information, setInformation ] = useState ( [
      { id: 0, name: " Hashim ", age: 19 },
      { id: 1, name: " Rami ", age: 23 },
      { id: 2, name: " Talal ", age: 25 },
      { id: 3, name: " Ahmed ", age: 28 },
      { id: 4, name: " Yusuf ", age: 23 },
      { id: 5, name: " Rashed ", age: 24 },
      { id: 6, name: " Ali ", age: 33 }
    ]);

  const [ item, addItem ] = useState ({ id: 0, name: "", age: 0 });

    const updateitem = ( e ) => {
    addItem((prev) => ({
    ... prev,
    [e.target.name] : e.target.value
    }))
    
   }
  const addInformation = () => {
    let info = [ ...information ]
    info.push ( item )
    setInformation( info )
  }
    const deleteItem = ( index ) => {
      let info = [ ... information ]
      info.splice( index, 1 )
      setInformation(info)
    }

    return (
      <>
       <div style = {{ textAlign: "left" }}>
        <input type = "text"  value = { item.id } name = "id" onChange = { updateitem } placeholder = "id"/>
        <input type = "text" value = {item.name } name = "name" onChange = { updateitem } placeholder = 'Name' />
        <input type = "text" value = { item.age }  name = "age" onChange = { updateitem }  placeholder = 'Age'/>
        <input type = "button" onClick = { addInformation } value = "Add"/>
       </div>
        <table>
          <thead>
          <tr>
            <th> ID </th>
            <th> NAME </th>
            <th> AGE </th>
            <th> DELELTE </th>
          </tr>
          </thead>
          <tbody>
          {
           information.map(( info, index ) => 
           {
            return (
              <tr key = { index }>
                <td> { info.id } </td>
                <td> { info.name } </td>
                <td>{ info.age }</td>
                <td><button onClick = { () => deleteItem( index ) }>X</button></td>
              </tr>
              )
            }
          )
          }
          </tbody>
        </table>
        </>
    );
  }
    
  export default Table;