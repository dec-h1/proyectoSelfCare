import { TitlePage } from "../../components/title-page";

function PageUserData() {
  return (
    <div className="page-login flex flex-col h-screen">
      <TitlePage
        title="Datos"
        subtitle="Ingrese su información"
      />
      <div className="rounded-t-xl bg-primary flex-grow pt-20">
 
      </div>
    </div>
  );
}

export { PageUserData };