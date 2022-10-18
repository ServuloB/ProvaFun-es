import './index.scss'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Funcao9(){
    const [tamanho, setTamanho] = useState();
    const [resultado, setResultado] = useState([]);

    function linha(tamanho){
        let arr= [];

        for(let i = 1; i <= tamanho; i++){
            arr.push(' *');
            setResultado(arr);
        }
    }

    function contar(){
        linha(tamanho);
    }

    return(
        <section className='funcoes'>
            <h1>VAMOS CONTAR</h1>
            <p>INICIO</p>
            <input type='number' value={tamanho} onChange={e=>setTamanho(e.target.value)}/>
            <button onClick={contar} className='Servulo' >CONTAR</button>
            <br/>
            <hr/>
            <span> {resultado.map(item =>
                <span>{item}</span>
                )} </span>

            <br/>
            <Link to='/'>VOLTAR</Link>
        </section>
    );

}