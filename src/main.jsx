import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Menu } from "./shared/Menu/Menu";
import { Footer } from "./shared/Footer/Footer";
import { Home } from "./Home/Home";
import { About } from "./About/About";
import { Services } from "./Services/Services";
import { Porfolio } from "./Porfolio/Porfolio";
import { Contact } from "./Contact/Contact";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

        <Menu/>
        <Home/>
        <About/>
        <Services />
        <Porfolio />
        <Contact />
        <Footer />

  </React.StrictMode>,
)
