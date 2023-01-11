import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]
    
    // Um useState para cada campo do formulário. 
    const [nome, setNome] = useState('') // Todos começam com estado vazio (  useState('')  )
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault() // bloqueia o evento do submit
        props.aoColaboradorCadastrado( { // Chama a função com o objeto onde consta os campos
            nome,
            cargo,
            imagem,
            time
        })
    }
    
    return (

        <section className="formulario">
            <form onSubmit={aoSalvar} >
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} 
                label="Nome" 
                placeholder="Digite seu nome"
                valor={nome}   //    Aqui (nome) é o nome passado pelo usuário
                aoAlterado={valor => setNome(valor)} // aoAlterado aqui, está apenas setando (recebendo) o estado , ou seja, o valor que foi recebido do evento.

                />
                <CampoTexto obrigatorio={true}
                 label="Cargo"
                placeholder="Digite seu cargo"
                valor={cargo} // Aqui (cargo) é o cargo passado pelo usuário
                aoAlterado={valor => setCargo(valor)}

                 />
                <CampoTexto label="Imagem"
                placeholder="Digite o endereço da imagem"
                valor={imagem} //Aqui (imagem) é o endereço da imagem passado pelo usuário
                aoAlterado={valor => setImagem(valor)}

                />
                <ListaSuspensa obrigatorio={true}
                label="Time"
                itens={times} 
                valor={time} // Aqui (time) é o time passado pelo usuário
                aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}


export default Formulario


// SOBRE obrigatorio

// Podemos dizer que o input é required se a props for obrigatoria, então se o obrigatório for true o input vai ser required. Sendo assim, se tentarmos submeter um formulário com esse campo em branco, o navegador não deve deixar.