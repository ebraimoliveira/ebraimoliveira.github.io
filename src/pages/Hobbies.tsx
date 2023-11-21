import Header from "../components/Header"
import { useLanguageContext } from "../contexts/languages/Provider"

import paginaEmManutencao from '../images/paginaEmConstrucao.jpg';

export default function () {
  const { toHobbiesBtn } = useLanguageContext()

  return (
    <div id="hobbies">
      <Header></Header>
      <p>{toHobbiesBtn}

        <div className="manutencaoDiv">
          <img src={paginaEmManutencao} alt="Página em manutenção" />
        </div>
        <br></br>
        BoardGames, Escalada, Rpg, Literatura, Marcenaria , Moto</p>
    </div>
  )
};