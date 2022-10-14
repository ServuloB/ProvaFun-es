import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Cinema(){
    const [inteiras, setInteiras] = useState("");
    const [meias, setMeias] = useState("");
    const [diaSemana, setDiaSemana] = useState("");
    const [nacional, setNacional] = useState(false);
    const [resultado, setResultado] = useState(0);

    function CompraTotal( inteiras, meias, diaSemana, nacional){


        if ( nacional === true){
            setResultado(  ( Number(inteiras) + Number(meias) ) * 5.00);
        }
        else if ( diaSemana === 'quarta'){
            setResultado(( Number(inteiras) + Number(meias) ) * 14.25);
        }
        else {
            setResultado(( inteiras * 28.50 ) + (meias * 14.25));
        }


    }

    useEffect( ()=>{
        CompraTotal(inteiras, meias, diaSemana, nacional);
    },[inteiras, meias, diaSemana, nacional])

    return(
        <section className='funcoes'>
         <h1>CINEMA</h1>
            <p>Inteiras</p>
            <input type='number' value={inteiras} onChange={e=>setInteiras(e.target.value)}/>
            <p>Meias</p>
            <input type='number' value={meias} onChange={e=>setMeias(e.target.value)}/>
            <p>Dia da semana</p>
            <input type='text' value={diaSemana} onChange={e=>setDiaSemana(e.target.value)}/>
            <p>Filme nacional</p>
            <input type='checkbox' checked={nacional} onChange={e=>setNacional(e.target.checked)}/>
            <br/>
            <hr/>
            <span> O total a se pagar pelos ingressos é {resultado} </span>

            <br/>
            <Link to='/'>VOLTAR</Link>
        </section>
    );
}