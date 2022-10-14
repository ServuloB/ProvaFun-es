import './index.scss'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Funcao7(){
    const [ganhos, setGanhos] = useState();
    const [gastos, setGastos] = useState();
    const [resultado, setResultado] = useState("");

    function orcamentoFamiliar(ganhos,gastos){
        let porcentagem = (gastos*100)/ganhos;

        if(porcentagem>100){
            setResultado("Orçamento comprometido! Hora de rever seus gastos");
        }
        else if(porcentagem>80){
            setResultado("Cuidado, seu orçamento pode ficar comprometido!");
        }
        else if(porcentagem>50){
            setResultado("Atenção, melhor conter gastos!");    
        } 
        else if(porcentagem>20){
            setResultado("Muito bem, seus gastos não ultrapassam metade dos ganhos");
        } 
        else if(porcentagem>=0){
            setResultado("Parabéns, esta gerenciando bem o seu orçamento");
        }
        else{
            setResultado("Entrada inválida");
        }
    }

    function verOrcamento(){
        orcamentoFamiliar(ganhos,gastos);
    }

    return(
        <section className='funcoes'>
            <h1>SITUAÇÃO SALARIAL FAMILIAR </h1>
            <p>GANHOS</p>
            <input type='number' value={ganhos} onChange={e=>setGanhos(e.target.value)}/>
            <p>GASTOS</p>
            <input type='number' value={gastos} onChange={e=>setGastos(e.target.value)}/>
            <button onClick={verOrcamento} className='Servulo' >VERIFICAR</button>
            <br/>
            <hr/>
            <span> {resultado} </span>

            <br/>
            <Link to='/'>VOLTAR</Link>
        </section>
    );

}