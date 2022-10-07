import axios from 'axios'
import React, { useState, useEffect, useRef } from 'react'
import '../App.css'

function QuranFetch() {
  const [ lang, setLang ] = useState("ar")
  const [ Surah, setSurah ] = useState( [] )
  const [ selected, setSelected ] = useState(0)
  const [ Aya, setAya ] = useState( [] )
  const [ AudioFile, setAudioFile ] = useState( {} )
  const [ isPlaying, setIsPlaying ] = useState(true)
  const scrollRef = useRef();
  let audio = new Audio()

  useEffect(() => {
    (scrollRef.current) && scrollRef.current.scrollIntoView({behavior: 'smooth'})}, [Aya])

  useEffect(() => {
    axios.get ("http://api.alquran.cloud/v1/surah")
      .then((res) => {
      setSurah(res.data.data)
    })

    fetch(`http://api.alquran.cloud/v1/quran/ar.alafasy`)
      .then(res => res.json() )
      .then(data => {
      setAudioFile(data.data)
    }) }, [])

  const ayatClick = ( index ) => {
    setSelected(index);
    fetch(`http://api.alquran.cloud/v1/surah/${index}`)
    .then( res => res.json() )
    .then( data => {
      let Ayat = data.data.ayahs
      setAya(Ayat)}) }

  const playClick = ( item, index ) => {
    audio.src = (AudioFile.surahs[item - 1].ayahs[index].audio)
    if ( isPlaying ) {
      audio.pause()
      setIsPlaying( false )
    }
    audio.play()
    setIsPlaying( true )
  }

  const pauseClick = () => {( isPlaying ) && audio.pause()}

  return (
    <div className = 'container' >
      <h1 className = 'quran-header'> Quran | القرآن الكريم </h1>
      <label htmlFor = "text"> Choose a language: </label>
      <select name = "Language" value = { lang } onChange = {( e ) => setLang(e.target.value)}>
        <option value = "en"> English </option>
        <option value = "ar"> عربي </option>
      </select>
      <ul>
        {Surah.map(( surah, i ) => {
            return (
              
              <button key = { i } 
              onClick = { () => ayatClick(i + 1)}>
                { ( lang === "ar" ) ? surah.name : surah.englishName }
              </button>)
          })} 

      </ul>
      <br/>
      <div ref = { scrollRef } className = 'aya-scroll'>
        {Aya.length <= 0 && <h1> No Sura Selected | Pick Sura </h1>}
        { Aya.map(( aya, i ) => {
          return (

          <div key = { i } className = 'ayat-text'>  
            <button className = 'play-btn' onClick = {()=> playClick(selected, i)}> ▶️ </button>
            <button className = 'play-btn play-btn2' onClick = {()=> pauseClick()}> ⏸ </button>
            { aya.text } 
          </div>)

        })}
      </div>
    </div>
  )
}

export default QuranFetch