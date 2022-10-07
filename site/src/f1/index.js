import { useEffect, useState } from "react";



export default function Acai(){
    const [pequena, setPequena] = useState(0);
    const [desconto, setDesconto] = useState(0);    
    const [media, setMedia] = useState(0);
    const [grande, setGrande] = useState(0);
    const [total, setTotal] = useState(0);

    function Calcularacai( qntpequenas, qntmedias, qntgrandes, desconto){
        const peq = qntpequenas* 13.50;
        const  med= qntmedias * 15.00;
        const gran= qntgrandes * 17.50;
        const porcentagem= (peq+med+gran)* desconto/100;
        const total1= peq+med+gran - porcentagem;
        console.log(total1);
        setTotal(total1)
    }

    useEffect( ()=>{
        Calcularacai(pequena,media,grande,desconto);
    },[pequena, desconto,grande,media])

    return(
        <section>
            <h1> FUNÇÃO AÇAÍ</h1>
            <p>QUANTIDADES DE PEQUENAS:</p>
            <input type='number' value={pequena} onChange={e=>setPequena(e.target.value)}/>
            <p>QUANTIDADES DE MEDIAS:</p>
            <input type='number' value={media} onChange={e=>setMedia(e.target.value)}/>
            <p>QUANTIDADES DE GRANDES:</p>
            <input type='number'value={grande} onChange={e=>setGrande(e.target.value)}/>
            <p>DESCONTO:</p>
            <input type='number'value={desconto} onChange={e=>setDesconto(e.target.value)}/>
            <br/>
            <hr/>
            <span>O TOTAL A PAGAR É {total}</span>
        </section>
    );
}