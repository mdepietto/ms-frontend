import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// require('dotenv').config()
// import 'semantic-ui-css/semantic.min.css'

import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import App from './App';
import ShelfPage from './routes/ShelfPage'
import NotePage from './routes/NotePage'

// const domain = process.env.REACT_APP_AUTH0_DOMAIN
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

ReactDOM.render(
    <BrowserRouter>
        <Auth0Provider
            domain="dev-lbwyz5ki.us.auth0.com"
            clientId="wowmgjNAzFo0IryKleVTHsvQZ8x19EPw"
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
    </BrowserRouter>,
    document.getElementById('root')
)