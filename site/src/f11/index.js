import './index.scss'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Funcao11() {
    const [base, setBase] = useState();
    const [altura, setAltura] = useState();
    const [pi, setPi] = useState(false);
    const [resultado, setResultado] = useState([]);

    function retangulo(base, altura) {
        let arr = [];

        for (let i = 1; i <= altura; i++) {
            let cols = [];
            for (let i = 1; i <= base; i++) {
                cols.push('*')
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
            <h1>Monte o Retangulo</h1>
            <p>BASE</p>
            <input type='number' value={base} onChange={e => setBase(e.target.value)} />
            <p>ALTURA</p>
            <input type='number' value={altura} onChange={e => setAltura(e.target.value)} />
            <button onClick={desenhe} className='Servulo' >desenhe</button>
            <br />
            <hr />
            <span> {resultado.map(item =>
                item == '##pular##'
                    ? <br />
                    : <span>{item}</span>
            )} </span>

            <br />
            <Link to='/'>VOLTAR</Link>
        </section>
    );

}