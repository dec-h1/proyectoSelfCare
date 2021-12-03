import { BottomMenu } from "../../components/bottom-menu";
import { TitlePageUserInterface } from "./components/title-userinterface";
import { InterfaceCards } from "./components/userinterfacecards";


function PageUserInterface() {
    return (
      <div className="flex flex-col h-screen">
        <TitlePageUserInterface
        title="Hola, Nombre"
        />
        <div className="rounded-t-xl bg-primary h-full pt-10 overflow-y-scroll px-5">
            <div className="rounded-xl bg-white w-full h-28 text-right mb-8">
                <p className="text-2xl font-bold pr-20 pt-5">PUNTOS</p>
                <p className="text-base font-bold text-primary pr-32">0</p>
            </div>
            <div className="mb-10">
            <InterfaceCards/>
            </div>
            <div className="mb-10">
            <InterfaceCards/>
            </div>
            <div>
            <InterfaceCards/>
            </div>
          
            
        </div>
        <BottomMenu/>
    
      </div>
    );
  }
  
  export { PageUserInterface };