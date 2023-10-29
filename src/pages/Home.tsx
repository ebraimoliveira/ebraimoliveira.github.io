import Header from "../components/Header";
import { useLanguageContext } from "../contexts/languages/Provider";
import '../styles/home.css'

export default function Home() {

  const { welcomeTxt } = useLanguageContext()

  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div id="home">
        <p style={{ whiteSpace: 'pre-line' }}>{welcomeTxt}</p>
      </div>
    </div>
  )
};