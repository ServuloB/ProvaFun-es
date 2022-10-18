import './index.scss'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Funcao9(){
    const [inicio, setInicio] = useState();
    const [ultimo, setUltimo] = useState();
    const [resultado, setResultado] = useState([]);

    function contagem(inicio,fim){
        let arr= [];

        for(let i = inicio; i <= fim; i++){
            arr.push(i);
            setResultado(arr);
        }
    }

    function contar(){
        contagem(inicio,ultimo);
    }

    return(
        <section className='funcoes'>
            <h1>VAMOS CONTAR</h1>
            <p>INICIO</p>
            <input type='number' value={inicio} onChange={e=>setInicio(e.target.value)}/>
            <p>FINAL</p>
            <input type='number' value={ultimo} onChange={e=>setUltimo(e.target.value)}/>
            <button onClick={contar} className='Servulo' >CONTAR</button>
            <br/>
            <hr/>
            <span> {resultado.map(item =>
                <div>{item}</div>
                )} </span>

            <br/>
            <Link to='/'>VOLTAR</Link>
        </section>
    );

}