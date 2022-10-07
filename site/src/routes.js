import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Funcao1 from './f1'
import Funcao2 from './f2'
import Funcao3 from './f3'
import Home from './home'

export default function Rotas(){
return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/f1' element={<Funcao1/>}/>
    <Route path='/f2' element={<Funcao2/>}/>
    <Route path='/f3' element={<Funcao3/>}/>
  </Routes>
  </BrowserRouter>
 );
}