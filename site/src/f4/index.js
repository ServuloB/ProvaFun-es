import './index.scss'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Salario(){
    const [salario, setSalario] = useState(0);
    const [bonus, setBonus] = useState(0);
    const [desconto, setDesconto] = useState(0);
    const [total, setTotal] = useState(0);

    function Calcularsalario( salario, bonus,desconto){
        let porc= salario *(bonus/100);
        let total1= salario-desconto+porc;
        setTotal(total1)
    }

    useEffect( ()=>{
        Calcularsalario(salario,bonus,desconto);
    },[salario, desconto,bonus])

    return(
        <section className='funcoes'>
            <h1> DESCUBRA SEU SALÁRIO  </h1>
            <p>SALÁRIO BASE</p>
            <input type='number' value={salario} onChange={e=>setSalario(e.target.value)}/>
            <p>BÔNUS MENSAL</p>
            <input type='number' value={bonus} onChange={e=>setBonus(e.target.value)}/>
            <p>DESCONTOS</p>
            <input type='number'value={desconto} onChange={e=>setDesconto(e.target.value)}/>
            <br/>
            <hr/>
            <span>Seu salário liquido é de R${total}</span> 
            
            <br/>
            <Link to='/'>VOLTAR</Link>
        </section>
    );
}