import { useEffect, useState } from "react";



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
        <section>
            <h1> Descubra o seu salario  </h1>
            <p>Salário Base:</p>
            <input type='number' value={salario} onChange={e=>setSalario(e.target.value)}/>
            <p>Bonus mensal:</p>
            <input type='number' value={bonus} onChange={e=>setBonus(e.target.value)}/>
            <p>descontos</p>
            <input type='number'value={desconto} onChange={e=>setDesconto(e.target.value)}/>
            <br/>
            <hr/>
            <span>Seu salário liquido é de R${total}</span>
        </section>
    );
}