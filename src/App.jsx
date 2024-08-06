import { useState } from "react";

import Perfil from "./components/Perfil";
// import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  // const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState(''); 

  return(
    <>
      <form className="form-usuario">
        <label className="form-usuario-label">Digite o nome do usuário do github</label>
        <input className="form-usuario-input" onBlur={evento => setNomeUsuario(evento.target.value)} type="text" />
      </form>

      {nomeUsuario.length > 0 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* {formularioEstaVisivel && (
        <Formulario />
      )}
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">Toggle form</button> */}
    </>
  )
}

export default App
