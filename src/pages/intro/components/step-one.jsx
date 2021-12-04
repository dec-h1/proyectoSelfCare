import logointro from "../../../images/assets/img/logo-white.png";
import imagebot from "../../../images/ensalada-bottom.png";


function StepOne(props) {
  const { title = ""} = props;

  return <div className="step-one h-screen grid grid-cols-1">
    
  <div className="grid grid-cols-1 place-content-end">
  <div className="container-logoslogan">

  <img className="w-80 pl-5 " src={logointro} alt="selfcare-logo-top-face" />
  
  <h1>Selfcare</h1>
  </div>

  <p className="text-center stepOne-p">{title}</p>
  </div>

  <div className="flex justify-end items-end">
  <img className="h-300" src={imagebot} alt="selfcare-logo-top-face" />
  </div>
</div>;
}

export { StepOne };
