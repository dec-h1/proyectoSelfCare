import "./header.css";
import imagenes from "../components/assets/banner-quizz.jpg"

function Header() {
  return (
      <header className="header">
        <img className="header-banner" src={imagenes} alt=""/>
        <h1>
          Quizz
        </h1>
      </header>
  
  );
};

export { Header };