import { useState } from 'react'
import './App.css'
import Navbar from '../component/navbar/Navbar'
import Header from '../component/header/Header'
import Aboutme from '../component/About/Aboutme'
import Service from '../component/services_/Service'
import Contact from '../component/contact/Contact'
import Footer from '../component/footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>
<Header/>
<Aboutme/>
<Service/>

<Contact/>
<Footer/>
    </>
  )
}

export default App
