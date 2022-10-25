import './index.scss'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Funcao13(){
    const [estudantes, setEstudandes] = useState(0);
    const [litrosP, setLitrosP] = useState();

    
    return(
        <section className='funcoes'>
            <h1>Sala de Aula</h1>
            
            <Link to='/'>VOLTAR</Link>
        </section>
    );

}