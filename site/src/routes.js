import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Funcao1 from './f1'
import Funcao2 from './f2'
import Funcao3 from './f3'
import Funcao5 from './f5'
import Funcao4 from './f4'
import Funcao6 from './f6'
import Funcao8 from './f8'
import Funcao7 from './f7'
import Funcao9 from './f9'
import Funcao10 from './f10'
import Funcao11 from './f11'
import Home from './home'

export default function Rotas(){
return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/f1' element={<Funcao1/>}/>
    <Route path='/f2' element={<Funcao2/>}/>
    <Route path='/f3' element={<Funcao3/>}/>
    <Route path='/f5' element={<Funcao5/>}/>
    <Route path='/f4' element={<Funcao4/>}/>
    <Route path='/f6' element={<Funcao6/>}/>
    <Route path='/f8' element={<Funcao8/>}/>
    <Route path='/f7' element={<Funcao7/>}/>
    <Route path='/f9' element={<Funcao9/>}/>
    <Route path='/f10' element={<Funcao10/>}/>
    <Route path='/f11' element={<Funcao11/>}/>
  </Routes>
  </BrowserRouter>
 );
}