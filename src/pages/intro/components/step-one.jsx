import logointro from "../../../images/logo-intro.png";
import imagebot from "../../../images/ensalada-bottom.png";

function StepOne(props) {
  const { title = ""} = props;

  return <div className="step-one h-screen grid grid-cols-1">
    
    <div className="grid grid-cols-1 place-content-end">
    <img className="w-80 pl-5 " src={logointro} alt="selfcare-logo-top-face" />
    <h2 className="text-white text-base px-20 text-center">{title}</h2>
    </div>

    <div className="flex justify-end items-end">
    <img className="h-96" src={imagebot} alt="selfcare-logo-top-face" />
    </div>
  </div>;
}

export { StepOne };
