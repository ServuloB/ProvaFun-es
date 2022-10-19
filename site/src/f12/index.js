import './index.scss'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Funcao12(){
    const [estudantes, setEstudandes] = useState();
    const [litrosP, setLitrosP] = useState();
    const [consumo, setConsumo] = useState();
    const [resultado, setResultado] = useState(0);

    function cafeProf(estudantes,litros,consumo){
        try{
        let resp = litros;
        let a= (estudantes * consumo) / 1000;
        
        while(resp<a){
            resp=Number(resp)+Number(litros);
        }
        setResultado(resp);
    }catch(err){
        alert(err.message);
    }
    }

    function conferir() {
        cafeProf(estudantes,litrosP, consumo);
    }

    return(
        <section className='funcoes'>
            <h1>SITUAÇÃO SALARIAL FAMILIAR </h1>
            <p>Quantidades de estudantes:</p>
            <input type='number' value={estudantes} onChange={e=>setEstudandes(e.target.value)}/>
            <p>LITROS</p>
            <input type='number' value={litrosP} onChange={e=>setLitrosP(e.target.value)}/>
            <p>CONSUMO</p>
            <input type='number' value={consumo} onChange={e=>setConsumo(e.target.value)}/>
            <button onClick={conferir} className='Servulo' >VERIFICAR</button>
            <br/>
            <hr/>
            <span> {resultado} </span>
            <br/>
            <Link to='/'>VOLTAR</Link>
        </section>
    );

}