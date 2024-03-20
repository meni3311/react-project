import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './pages/layout';
import Home from './pages/Home';
import FAQs from './pages/FAQs';
import About from './pages/about';
import Contect from './pages/contect';
import Thank from './pages/thank';
import Gallery from './pages/gallery';
import Page404 from './pages/page404';
import Login from './pages/Login';

function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}></Route>
                <Route path='/faqs' element={<FAQs/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contect' element={<Contect/>}></Route>
                <Route path='/gallery' element={<Gallery/>}></Route>
                <Route path='/thank' element={<Thank/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/*' element={<Page404/>}></Route>
            </Route>
        </Routes>
    </Router>
  )
}

export default AppRoutes
