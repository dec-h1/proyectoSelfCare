import { TitlePage } from "../../components/title-page";
import { Button } from 'antd';

function PageWelcome() {
  return (
    <div className="page-login flex flex-col h-screen">
      <TitlePage
        title="Bienvenido"
        subtitle="La plataforma de aprendizaje saludable que necesitabas"
      />
      <div className="rounded-t-xl bg-primary flex-grow pt-20">
      <div className="pb-10  pl-5 pr-5">
      <Button className="bg-yellow-300 rounded-xl border-yellow-300 text-white w-full h-12 font-bold hover:bg-yellow-400 hover:border-yellow-400 hover:text-black">Registrarse</Button>
      </div>
      <div className="pb-10  pl-5 pr-5">
      <Button className="bg-yellow-300 rounded-xl border-yellow-300 text-white w-full h-12 font-bold hover:bg-yellow-400 hover:border-yellow-400 hover:text-black">Iniciar Sesión</Button>
      </div>
      </div>
    </div>
  );
}

export { PageWelcome };
