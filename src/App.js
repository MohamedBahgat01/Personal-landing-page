//Liberaries
import React , {useState , useEffect} from 'react'
import { BrowserRouter , Route ,  Routes } from 'react-router-dom'
import ScaleLoader from "react-spinners/ScaleLoader";
// Components
import Home from './Home'
import NavBar from './NavBar';
import Projects from './Projects'
import Cursor from './Cursor'
import Footer from './Footer'
// Bootstrap
import  'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"


const App = () => {
  const  [loading , setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [])

  return (
    <BrowserRouter>
      <Cursor />
      { loading ? 
        <div className="preloaderr">
          <ScaleLoader color={'#f87765'} loading={loading} height={100} margin={10} />
        </div>  : 
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </>
      }
    </ BrowserRouter>
  )
}

export default App

