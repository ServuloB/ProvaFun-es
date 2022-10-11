import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Funcao1 from './f1'
import Funcao2 from './f2'
import Funcao3 from './f3'
import Funcao4 from './f4'
import Funcao6 from './f6'
import Home from './home'

export default function Rotas(){
return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/f1' element={<Funcao1/>}/>
    <Route path='/f2' element={<Funcao2/>}/>
    <Route path='/f3' element={<Funcao3/>}/>
    <Route path='/f4' element={<Funcao4/>}/>
    <Route path='/f6' element={<Funcao6/>}/>
  </Routes>
  </BrowserRouter>
 );
}