import { useEffect, useState } from "react";

export default function Funcao5(){
    return(
        <section>
            <h1>FUNÇÃO PARADAS </h1>
            <p>CAPACIDADE DO CAMPO EM COMBUSTÍVEL</p>
            <input type='text'/>
            <p>CONSUMO DO VEICULO</p>
            <input type='number'/>
            <p>DISTÂNCIA DA VIAGEM</p>
            <input type='number'/>
            <br/>
            <hr/>
            <span> Você precisará fazer {} para abastecer </span>
        </section>
    );
}  