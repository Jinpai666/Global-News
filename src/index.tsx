import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from 'react-redux'
import sortReducer from './features/sort'
import articleCountReducer from './features/totalArticles'
import nextArticleIdReducer from './features/nextArticle'
import {BrowserRouter} from "react-router-dom";


const store = configureStore({
    reducer: {
        sortAsTiles: sortReducer,
        totalArticles: articleCountReducer,
        nextArticleId: nextArticleIdReducer,
    }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>

    </React.StrictMode>,
)
