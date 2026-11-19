import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Products from './pages/Products'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'

const App = () => {
  return (
    <div className='min-h-screen bg-black text-white'>
      <Navbar />
      <div className='flex-1 flex justify-center pt-10    font-bold text-2xl'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        
        <Route path='/products' element={<Products/>}>
        <Route path='men' element={<Men/>}/>
        <Route path='women' element={<Women/>}/>
        <Route path='kids' element={<Kids/>}/>
        </Route>
        
        <Route path='*' element={<NotFound />} /> 
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App