import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Details from "./pages/Details"
import Pricing from "./pages/Pricing"
import Popular from "./pages/Popular"
import Bollywood from "./pages/Bollywood"
import Hollywood from "./pages/Hollywood"
import Login from "./pages/Login"

function App(){
  return(
    <>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/details/:slug'} element={<Details/>}/>
      <Route path={'/pricing'} element={<Pricing/>}/>
      <Route path={'/popular'} element={<Popular/>}/>
      <Route path={'/bollywood'} element={<Bollywood/>}/>
      <Route path={'/hollywood'} element={<Hollywood/>}/>
      <Route path={'/login'} element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App;