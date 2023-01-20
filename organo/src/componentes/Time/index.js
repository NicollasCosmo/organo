import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const css = {backgroundColor: props.corSecundaria} // const que recebe a cor secundária através do props
    const css2 = {borderColor: props.corPrimaria} // const que recebe a cor primária através do props

    return(   // Aqui se > 0 for verdade, insere a section, caso contrário devolve string vazia ( : '')               
       (props.colaboradores.length > 0) ? <section className='time' style={css}>
        <h3 style={css2}>{props.nome}</h3> 
        <div className='colaboradores'>
            {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)} 
        </div>            
       
       </section>
       : ''
    )
}

export default Time

