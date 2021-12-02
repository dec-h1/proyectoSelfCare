import { Carousel } from "antd";
import { StepOne } from "./components/step-one";
import { StepTwo } from "./components/step-two";
import { StepThree } from "./components/step-three";
import { StepFour } from "./components/step-four";

function PageIntro() {

  return (
    <div className="page-intro bg-primary">
      <Carousel dotPosition={"bottom"}>
        <div>
          <StepOne 
          title="La plataforma de aprendizaje saludable que necesitabas"
          />
        </div>
        <div>
          <StepTwo />
        </div>
        <div>
          <StepThree />
        </div>
        <div>
          <StepFour/>
        </div>
      </Carousel>
    </div>
  );
}

export { PageIntro };
