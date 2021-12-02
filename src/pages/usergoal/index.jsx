import { TitlePage } from "../../components/title-page";
import {Button} from 'antd';
import "./usergoal.css";

function PageUserGoal() {
  return (
    <div className="page-login flex flex-col h-screen">
      <TitlePage
        title="Objetivo"
        subtitle="Ingrese su objetivo"
      />
      <div className="rounded-t-xl bg-primary flex-grow px-5">
        <div className="grid grid-cols-1 px-5 pt-10 mb-8">
      <Button type="primary" id="btn1" className="bg-white rounded-xl border-white text-black w-full h-12 mb-8 font-bold hover:bg-yellow-400 hover:border-yellow-400 hover:text-black">
        Perdida de peso
      </Button>
      <Button type="primary" id="btn2" className="bg-white rounded-xl border-white text-black w-full h-12 mb-8 font-bold hover:bg-yellow-400 hover:border-yellow-400 hover:text-black">
        Mantener peso
      </Button>
      <Button type="primary" id="btn2" className="bg-white rounded-xl border-white text-black w-full h-12 mb-8 font-bold hover:bg-yellow-400 hover:border-yellow-400 hover:text-black">
        Aumentar peso
      </Button>
      </div>
      <Button type="primary" disabled className="btn-sgt rounded-xl w-full h-12 font-bold hover:bg-yellow-400 hover:border-yellow-400 hover:text-black">
        Siguiente
      </Button>
      </div>
    </div>
  );
}

export { PageUserGoal };