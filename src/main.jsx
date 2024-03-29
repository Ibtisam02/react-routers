import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home.jsx'
import About from "./Components/About.jsx"
import Contact from './Components/Contact.jsx'
import User from './Components/User.jsx'
import Github from './Components/Github.jsx'
let router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>} />
      <Route path='' element={<Home/>}/>
      <Route path='user/:user' element={<User/>}/>
      <Route path='github' element={<Github/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
