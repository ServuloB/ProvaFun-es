import './index.scss'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Funcao5(){
    
    const [capacidade, setCapacidade] = useState();
    const [consumo, setConsumo] = useState();
    const [distancia, setDistancia] = useState();
    const [total, setTotal] = useState();

    function calcularParadas(capac,consu,dist){
        let x= capac/consu;
        let y= dist/x;
        let final = y/capac;
        setTotal(Math.trunc(final));

        if(!capac ||!consu ||!dist ){
            setTotal(0);
        }
    }

    useEffect( ()=>{
        calcularParadas(capacidade,consumo,distancia);
    },[capacidade,consumo,distancia]);

    
    

    return(
        <section className='funcoes'>
            <h1>FUNÇÃO PARADAS </h1>
            <p>CAPACIDADE DO CAMPO EM COMBUSTÍVEL</p>
            <input type='text' value={capacidade} onChange={e=>setCapacidade(e.target.value)}/>
            <p>CONSUMO DO VEICULO</p>
            <input type='number' value={consumo} onChange={e=>setConsumo(e.target.value)}/>
            <p>DISTÂNCIA DA VIAGEM</p>
            <input type='number' value={distancia} onChange={e=>setDistancia(e.target.value)}/>
            <br/>
            <hr/>
            <span> Você precisará fazer {total} paradas para abastecer </span>
            <Link to='/'>VOLTAR</Link>
        </section>
    );
}  