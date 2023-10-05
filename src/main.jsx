import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/contact.jsx';
import Error from './components/error.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
      <Notifications/>
      <BrowserRouter>
      <Routes>
          <Route path="/" exact={true} element={<App />} />
          <Route path="/contact" exact={true} element={<Contact />} />
          <Route path="*" exact={true} element={<Error />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>,
)
