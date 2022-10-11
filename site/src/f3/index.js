import { useEffect, useState } from "react";

export default function Funcao3(){
    
    const [peso, setPeso] = useState(0);
    const [resultado, setResultado] = useState("");

    function sorvete(gramas){
        let x= 3.50;
        if(gramas>=1000){
        x= 3.00
        }
        const valor = gramas/100 *x;
        setResultado("TOTAL A PAGAR É " + valor);
        if(gramas < 0){
            setResultado('PESO INVÁLIDO')
        }
    }

    useEffect( ()=>{
        sorvete(peso);
    },[peso])


    return (
        <section>
            <h1>FUNÇÃO SORVETERIA</h1>
            <p>TOTAL DE GRAMAS</p>
            <input type='number' value={peso} onChange={e=>setPeso(e.target.value)}/>
            <br/>
            <hr/>
            <span>  {resultado} </span>
        </section>
    );
}