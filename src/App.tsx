import './App.css'
import './css reset/reset.scss'
import Main from "./components/Main/Main";
import Layout from "./components/Layout/Layout";
import {Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    <div className="App">
        <Layout>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/:countryCode" element={<Main/>}/>
            </Routes>
        </Layout>



    </div>
  )
}

export default App
