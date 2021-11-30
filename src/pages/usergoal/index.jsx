import { TitlePage } from "../../components/title-page";


function PageUserGoal() {
  return (
    <div className="page-login flex flex-col h-screen">
      <TitlePage
        title="Datos"
        subtitle="Ingrese su información"
      />
      <div className="rounded-t-xl bg-primary flex-grow">
      
      </div>
    </div>
  );
}

export { PageUserGoal };