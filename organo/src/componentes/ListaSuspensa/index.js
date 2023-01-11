import './ListaSuspensa.css'


// Props.itens.map percorre cada item da lista [itens] e retorna p cada um a arrow function que retorna uma <option/> com o item da lista dentro, onde também cada item tem uma chave (key) que leva seu própio nome (item) para controle do react para saber quando tem que enderizar.

const ListaSuspensa = (props) => {

    return (
        <div className="lista-suspensa">
            <label>
                {props.label}
            </label>
            <select onChange={ evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}> 
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })} 
            </select>
        </div>
    )
    
}

export default ListaSuspensa

