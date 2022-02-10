import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Auth0Provider } from '@auth0/auth0-react'
import { HashRouter, Routes, Route } from "react-router-dom"

import App from './App';
import ShelfPage from './routes/ShelfPage'
import NotePage from './routes/NotePage'

const { REACT_APP_DOMAIN, REACT_APP_CLIENTID } = process.env

ReactDOM.render(
    <HashRouter>
        <Auth0Provider
            domain={ REACT_APP_DOMAIN }
            clientId={ REACT_APP_CLIENTID }
            redirectUri={ window.location.origin }
        >
            <Routes>
                <Route path='/' element={ <App /> } />

                <Route path='books' element={ <ShelfPage name='books' /> } />
                <Route path='movies' element={ <ShelfPage name='movies' /> } />
                <Route path='shows' element={ <ShelfPage name='shows' /> } />

                <Route path='bookNotes' element={ <NotePage name='books' table='Book_Notes' /> } />
                <Route path='movieNotes' element={ <NotePage name='movies' table='Movie_Notes' /> } />
                <Route path='showNotes' element={ <NotePage name='shows' table='Show_Notes' /> } />
            </Routes>
        </Auth0Provider>
    </HashRouter>,
    document.getElementById('root')
)