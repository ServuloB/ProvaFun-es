import './index.scss'
import { Link } from 'react-router-dom'
import '../common/common.scss'

export default function Home(){
    return(
        <section className='home'>
             <span>NOME: Matheus Servulo Cajé INFO B</span>
            <p>NOME: Juliana Fatima INFO B</p>
            <div className='sla'>
            <hr/>
            <h1 className='t'>HOME</h1>
            
            <hr/>
            <div className='principal'>
            <Link to='/f1'>FUNÇÃO 1</Link>
            <Link to='/f2'>FUNÇÃO 2</Link>
            <Link to='/f3'>FUNÇÃO 3</Link>
            <Link to='/f4'>FUNÇÃO 4</Link>
            <Link to='/f5'>FUNÇÃO 5</Link>
            <Link to='/f6'>FUNÇÃO 6</Link>
            </div>
            </div>
        </section>
    );
}