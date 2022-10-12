import React from 'react'
import { useState } from 'react';

function Pages() {

  const [num,setNumber] = useState(1)
  const url =`https://quran-images-api.herokuapp.com/show/page/${num}`

  const checkPage = (number) => {
    if (number > 604)
      { return 1 }

    else if (number < 1)
      { return 604 }
    return number
  }

  const nextPage = () => {
    setNumber(( num ) => {
      let newPage = num + 1
      return checkPage( newPage )
    })
  }

  const prevPage = () => {
    setNumber(( num ) => {
      let newPage = num - 1;
      return checkPage(newPage)
    })
  }

  return (
    <div className = 'pages-container'>

      <div className = "img">
        <img src = { url }/>
      </div>
   
      <div className = 'btns'>
        <button onClick = { prevPage } className = 'left-arrow'> ← </button>
        { num } 
        <button onClick = { nextPage } className = 'right-arrow' > → </button> 
      </div>

    </div>
  )
}

export default Pages