import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom"
import './index.css'
import Home from './components/HOME/Home.jsx'
import About from './components/ABOUT/About.jsx'
import Contact from './components/ContactUs/ContactUs.jsx'
import User from './components/USER/User.jsx'
import Layout from './Layout.jsx'
import Github , {githubInfoLoader} from './components/GitHub/Github.jsx'
import Name from './components/Name/Name.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />}>
        <Route path='name' element={<Name />} />
      </Route>
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route path='github'loader={githubInfoLoader} element={<Github />} />
    </Route>
  )
)


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path='user/:userid' element={<User />} />
          <Route path="github" element={<Github />} loader={githubInfoLoader}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
*/