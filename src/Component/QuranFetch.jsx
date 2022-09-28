import axios from 'axios'
import React, { useState, useEffect } from 'react'
import '../App.css'

function QuranFetch() {
  const [Surah, setSurah] = useState([])
  const [selected,setSelected] = useState(0);
  const [Aya, setAya] = useState([])
  const [AudioFile, setAudioFile] = useState({})
  const [lang, setLang] = useState("en")

   useEffect(() => {
    axios.get ("http://api.alquran.cloud/v1/surah")
      .then(( res ) => {
      setSurah(res.data.data);
    })

    fetch(`http://api.alquran.cloud/v1/quran/ar.alafasy`)
    .then( res => res.json() )
    .then( data => {
    setAudioFile(data.data);
    //  console.log("index => " + index)
     // let audio = data.data.surahs[index+1].ayahs[index+1].audio
     //   console.log( audio );
    })
  }, [])

  const ayatClick = ( index ) => {
    setSelected(index);
    fetch(`http://api.alquran.cloud/v1/surah/${index}`)
    .then( res => res.json() )
    .then( data => {
      let Ayat = data.data.ayahs
        setAya(Ayat);
    })
  }
  
  const audioClick = ( item, index ) => {
  let audio = new Audio(AudioFile.surahs[item - 1].ayahs[index].audio);
  audio.play()
  // setAudio(Audio.surahs[item-1].ayahs[index].audio)
  
  }
//audioClick(null,0)
  return (
    <div className='container'>
      <label htmlFor = "cars"> Choose a language: </label>
      <select name = "Language" value = { lang } onChange = {( e )=> setLang(e.target.value)} >
      <option value = "en"> English </option>
      <option value = "ar"> عربي </option>
    
      </select>
        <ul>
            { Surah.map(( item , index ) => {
              return (
                <button key = { index } 
                onClick = { () => ayatClick( index + 1 ) }>
                    {(lang == "ar") ?  item.name : item.englishName}
                </button>)
              }) 
            }
        </ul>

        <br/>
        <div>
        {Aya.map((aya, i) => {
          return (
          <div key = { i } className = 'ayat-text' onClick = {()=> audioClick(selected, i)}>  ({ aya.numberInSurah }) - { aya.text } </div>
          )
       })}
        </div>
    </div>
  )
}

export default QuranFetch