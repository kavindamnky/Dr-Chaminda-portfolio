import { useState } from 'react'
import './App.css'
import Navbar from '../component/navbar/Navbar'
import Header from '../component/header/Header'
import Aboutme from '../component/About/Aboutme'
import Competencies from '../component/Competencies/Competencies'
import Service from '../component/services_/Service'
import LeadershipManagement from '../component/Leadership/Leadership'
import HighlightsGallery from '../component/Highlights/Highlights' 
import HRBlogUI from '../component/HRBlogUI/HRBlogUI'
import Footer from '../component/footer/Footer'
import ContactForm from '../component/contact/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>
<Header/>
<Aboutme/>
<Service/>
<Competencies/>
<LeadershipManagement/>
<HighlightsGallery/>
<HRBlogUI/>
<ContactForm/>
<Footer/>
    </>
  )
}

export default App
