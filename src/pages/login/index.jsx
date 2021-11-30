import { TitlePage } from "../../components/title-page";

function PageLogin() {
  return (
    <div className="page-login flex flex-col h-screen">
      <TitlePage
        title="Inicie Sesion"
        suptitle="Ingrese su Gmail y contrasenia"
      />
      <div className="rounded-t-xl bg-primary flex-grow pt-10 px-4">aca iria la pagina login</div>
    </div>
  );
}

export { PageLogin };
