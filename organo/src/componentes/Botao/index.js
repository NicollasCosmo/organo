import './Botao.css'



const Botao = (props) => {
    return (

        <button className="botao">
            {props.children}
        </button>
    )
}

export default Botao


// OBS SOBRE CHILDREN

// Por padrão, todo componente tem o que chamamos de children, que são os filhos. Então, em vez de fazer o props.texto fazemos o props.children em Botao. Tudo que estiver dentro de <Botao> será passado pela propriedade children. esse botão poderiam ser uma ícone, por exemplo, ou ter uma imagem dentro dele. Se fossem esses os caso, fazer isso via props seria complicado.