import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './css reset/reset.scss'
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>


    </div>
  )
}

export default App
