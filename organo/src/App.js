//importa os componentes aqui
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

// Retorna os componentes e seus parâmetros quando houver, no caso do CampoTexto recebeu os parãmetros label e placeholder
function App() {


  const [colaboradores, setColaboradores] = useState([])

  // Obs: O parâmetro (colaborador) é o objeto com nome, cargo, imagem e time.
  const aoNovocolaboradoradcionado = (colaborador) => { 
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador]) // Aqui (...colaboradores) é a array antiga com os colaboradores que já existiam, e agora está sendo acrescrntado o novo item dentro (colaborador).
  }




  return (  
    <div className="App"> 
      
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovocolaboradoradcionado(colaborador)}  />
      
      
    </div>
  )
}

export default App;
