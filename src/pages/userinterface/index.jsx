import { BottomMenu } from "../../components/bottom-menu";
import { TitlePageUserInterface } from "./components/title-userinterface";
import { InterfaceCards } from "./components/userinterfacecards";


function PageUserInterface() {
    return (
      <div className="flex flex-col h-screen">
        <TitlePageUserInterface
        title="Hola, Nombre"
        />
        <div className="rounded-t-xl bg-primary flex-grow pt-10 z-0 overflow-scroll px-5 ">
            <div className="rounded-xl bg-white w-full h-28 text-right mb-8">
                <p className="text-2xl font-bold pr-20 pt-5">PUNTOS</p>
                <p className="text-base font-bold text-primary pr-32">0</p>
            </div>

            <InterfaceCards className="mb-8"/>

            <InterfaceCards/>
        </div>
        <BottomMenu/>
    
      </div>
    );
  }
  
  export { PageUserInterface };