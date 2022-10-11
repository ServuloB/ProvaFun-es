import './index.scss'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Funcao2(){
    const [mes, setMes] = useState("");
    const [dia, setDia] = useState(0);
    const [resultado, setResultado] = useState(false);

    function libra(mes, dia) {
        let resp= false;
        if(mes ==="Setembro" && dia>22){
        resp= true;}
        if(mes ==="Outubro" && dia<=22){
        resp= true;}

        setResultado(resp);
    }

    
    useEffect( ()=>{
        libra(mes,dia);
    },[mes,dia])

    return (
        <section className='funcoes'>
            <h1>FUNÇÃO SIGNO LIBRA</h1>
            <p>MÊS</p>
            <input type='text' value={mes} onChange={e=>setMes(e.target.value)}/>
            <p>DIA</p>
            <input type='number' value={dia} onChange={e=>setDia(e.target.value)}/>
            <br/>
            <hr/>
            <span> VOCÊ É DE LIBRA? {resultado? "Sim" : "Não"}</span>

            <br/>
            <Link to='/'>VOLTAR</Link>
        </section>
    );
}