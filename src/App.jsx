import { useState } from 'react'
import reactLogo from '/assets/react.svg'
import viteLogo from '/vite.svg'
import '/src/style/App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import Movies from './data/data'

function App() {
  const MoviesArray=Movies.map((movie)=>{
    return(<Entry key={movie.id} movie={movie} />)
  })

  return (
    <>
      <Header />
      {MoviesArray}
    </>
    
  )
}

export default App
