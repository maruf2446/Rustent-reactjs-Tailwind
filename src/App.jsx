import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nevbar from './Components/Nevbar'
import Hero from './Components/Hero'
import HeadlineCards from './Components/HeadlineCards'
import Food from './Components/Food'
import Category from './Components/Category'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nevbar></Nevbar>
      <Hero></Hero>
      <HeadlineCards></HeadlineCards>
      <Food></Food>
      <Category></Category>
      <Footer></Footer>
    </>
  )
}

export default App
