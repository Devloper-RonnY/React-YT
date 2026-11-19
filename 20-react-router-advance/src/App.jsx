import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Products from './pages/Products'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import CoursesDetails from './pages/CoursesDetails'

const App = () => {
  return (
    <div className='min-h-screen bg-black text-white'>
      <Navbar />
      <div className='flex-1 flex justify-center font-bold text-2xl'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

        {/* Dynamic Routing */}
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:courseId' element={<CoursesDetails />}/>

        {/* nested routing */}
        <Route path='/products' element={<Products/>}>
        <Route path='men' element={<Men/>}/>
        <Route path='women' element={<Women/>}/>
        <Route path='kids' element={<Kids/>}/>
        </Route>

        {/* error routing */}
        <Route path='*' element={<NotFound />} /> 
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App