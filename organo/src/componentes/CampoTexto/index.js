import './CampoTexto.css'


// 1. Será usada a validação (required) se o props for props.obrigatorio, ou seja (true) em  branco.






const CampoTexto = (props) => { // Usou a propiedade props como parâmetro para usar na label e input



    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }



    
    return (
        <div className="campo-texto">
            <label>{props.label}</label> 
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto