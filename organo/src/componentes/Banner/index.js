import './banner.css' // importou banner.css para ser levado em consideração

function Banner() { //função para o componente banner 
    return(//retorna a imagem banner.png
        <header className="banner">
             <img src="/imagens/banner.png" alt="imagem banner principal" /> 
        </header>
       
    )
}

export default Banner // exporta esta função como padrão