import { TitlePage } from "../../components/title-page";
import { FormUserData } from "./components/formuserdata";


function PageUserData() {
  return (
    <div className="flex flex-col h-screen">
      <TitlePage
        title="Datos"
        subtitle="Ingrese su información"
      />
      <div className="rounded-t-xl bg-primary flex-grow pt-20">
      <FormUserData/>
      </div>
    </div>
  );
}

export { PageUserData };