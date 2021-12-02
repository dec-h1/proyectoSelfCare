import { TitlePage } from "../../components/title-page";
import { FormLogin } from "../login/components/formlogin";

function PageLogin() {
  return (
    <div className="page-login flex flex-col h-screen">
      <TitlePage
        title="Inicie Sesión"
        subtitle="Ingrese su Gmail y contraseña"
      />
      <div className="rounded-t-xl bg-primary flex-grow pt-10 px-4">
      <FormLogin/>
      </div>
    </div>
  );
}

export { PageLogin };
