import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Recent from './components/Recent/Recent'
import Trip from './components/Trip/Trip'
import DestCard from './components/DestCard/DestCard'
import RegPage from './components/RegPage/RegPage'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <Recent/>
      <Trip/>
      <DestCard/>
      <RegPage/>
      <Footer/>
    </>
  )
}

export default App
