import { Carousel } from "antd";
import { StepOne } from "./components/step-one";
import { StepTwo } from "./components/step-two";

function PageIntro() {
  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  

  return (
    <div className="page-intro bg-primary">
      <Carousel dotPosition={"bottom"} afterChange={onChange}>
        <div>
          <StepOne />
        </div>
        <div>
          <StepTwo />
        </div>
        <div>
          <StepOne />
        </div>
        <div>
          <StepTwo />
        </div>
      </Carousel>
    </div>
  );
}

export { PageIntro };
