import { useEffect, useState } from "react";

export default function Funcao3(){
    const [situacao, setSituacao] = useState(0);
    const [resultado, setResultado] = useState("");

    function Febre(situacao){

    if(situacao >= 41 ){
        setResultado('Hipertermia');
    }
    else if(situacao >= 39.6 && situacao <= 41){
        setResultado('Febre Alta');
    }
    else if(situacao >= 37.6 && situacao <= 39.6){
        setResultado('Febre');
    }
    else if(situacao >= 36 && situacao <= 37.6){
        setResultado('Normal');
    }
    else if(situacao <= 36 ){
        setResultado('Hipotermia');
    }
    }

    useEffect( ()=>{
        Febre(situacao);
    },[situacao])

    return(
        <section>
            <h1>SITUAÇÃO DA FEBRE </h1>
            <p>TEMPERATURA </p>
            <input type='number' value={situacao} onChange={e=>setSituacao(e.target.value)}/>
            <br/>
            <hr/>
            <span> A situacao para sua temperatura é {resultado} </span>
        </section>
    );
}