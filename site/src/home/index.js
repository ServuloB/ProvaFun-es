import './index.scss'
import { Link } from 'react-router-dom'

export default function Home(){
    return(
        <section>
            <h1>HOME</h1>
            <div className='principal'>
            <Link to='/f1'>FUNÇÃO 1</Link>
            <Link to='/f2'>FUNÇÃO 2</Link>
            <Link to='/f3'>FUNÇÃO 3</Link>
            <Link to='/f4'>FUNÇÃO 4</Link>
            <Link to='/f6'>FUNÇÃO 6</Link>
            </div>
        </section>
    );
}