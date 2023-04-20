import './App.scss'
import './css reset/reset.scss'
import NewsView from "./components/NewsView/NewsView";
import Layout from "./components/Layout/Layout";
import {Routes, Route, Navigate } from 'react-router-dom'
import WelcomePage from "./components/WelcomePage/WelcomePage";

function App() {

  return (
    <div className="App">
        <Layout>
            <Routes>
                <Route path="/" element={<WelcomePage/>}/>
                <Route path="/:countryCode" element={<NewsView/>}/>
            </Routes>
        </Layout>



    </div>
  )
}

export default App
