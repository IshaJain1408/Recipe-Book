import Cuisine from "./Cuisine"
import { Home } from "./Home"
import { Route,Routes, useLocation } from "react-router-dom"
import Searched from "./Searched"
import Recipe from "./Recipe"
import { AnimatePresence } from "framer-motion"
export const Segments = () => {
  const location=useLocation()
  return (
    <AnimatePresence >
    <Routes location={location} key={location.pathname}>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/cuisine/:type' element={<Cuisine/>}/>
        <Route  path='/searched/:search' element={<Searched/>}/>
        <Route  path='/recipe/:name' element={<Recipe/>}/>


    </Routes>
    </AnimatePresence>
  )
}
