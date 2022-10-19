import './index.scss'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Funcao11() {
    const [base, setBase] = useState();
    const [altura, setAltura] = useState();
    const [resultado, setResultado] = useState([]);
    

    function retangulo(base, altura) {
        let arr = [];

        for (let i = 1; i <= altura; i++) {
            let cols = [];
            for (let i = 1; i <= base; i++) {
                cols.push(' *')
            }
            arr.push(cols)
        }

        console.log(arr);
        setResultado(arr);
    }

    function desenhe() {
        retangulo(base, altura);
    }

    return (
        <section className='funcoes'>
            <h1>Monte o Retangulo com *</h1>
            <p>BASE</p>
            <input type='number' value={base} onChange={e => setBase(e.target.value)} />
            <p>ALTURA</p>
            <input type='number' value={altura} onChange={e => setAltura(e.target.value)} />
            <button onClick={desenhe} className='Servulo' >desenhe</button>
            <br />
            <hr />
            <span> {resultado.map(item =>
                    <div>{item.map(item=> 
                    <span>{item}</span>)}
                    </div>
            )} </span>
           
            <br />
            <span> {resultado.map(item =>
                    <div>
                    {item.map(item=> <span> o</span>)}
                    </div>)} </span>
            <br />
            <span> {resultado.map(item =>
                    <div>
                    {item.map(item=> <span> ▀</span>)}
                    </div>)} </span>
                    <br />
            <span> {resultado.map(item =>
                    <div>
                    {item.map(item=> <img className='tamanho' src='../images/caje.jpg'/>)}
                    </div>)} </span>
            <Link to='/'>VOLTAR</Link>
        </section>
    );

}