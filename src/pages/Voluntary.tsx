import Header from "../components/Header"
import { useLanguageContext } from "../contexts/languages/Provider"

// import './../styles/voluntary/voluntary.css';
// import './../styles/others/manutencaoDiv.css';

import paginaEmManutencao from '../images/paginaEmConstrucao.jpg';

export default function () {
  const { toVoluntaryBtn } = useLanguageContext()

  return (
    <div id="voluntary">
      <Header></Header>
      <div className="manutencaoDiv">
        <img src={paginaEmManutencao} alt="Página em manutenção" />
      </div>
    </div>
  )
};