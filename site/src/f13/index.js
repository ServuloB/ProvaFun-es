import './index.scss'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Funcao13(){
    const [estudantes, setEstudandes] = useState();
    const [alunos, setAlunos] = useState([]);
    const [ notas, setNotas] = useState([]);
    const [maior, setMaior] = useState();
    const [menor, setMenor] = useState();
    const [media, setMedia] = useState();

    function inputs(tamanho) {
        let arra = [];
        let arra2= [];
            for (let i = 1; i <= tamanho; i++) {
                arra.push(i)
                arra2.push(null)
            }
        console.log(arra);
        setAlunos(arra);
        setNotas(arra2);
    }

        function alterar(posicao, valor){
            notas[posicao]= valor;
        }


    function ver(){
        console.log(notas);
    }

    useEffect( ()=>{
       inputs(estudantes);
    },[estudantes])



    
    return(
        <section className='funcoes'>
            <h1>Sala de Aula</h1>
            <p>Quantidades de estudantes:</p>
            <input type='number' value={estudantes} onChange={e=>setEstudandes(e.target.value)}/>
            {alunos.map((item, i)=>
            <div>
            <p>Aluno {item}</p>
            <input type='text' value={notas[i]}  onChange={e=>alterar(i,e.target.value) }  />
            </div>
            )}
            <button onClick={ver}>Ver</button>
            
            <Link to='/'>VOLTAR</Link>
        </section>
    );

}