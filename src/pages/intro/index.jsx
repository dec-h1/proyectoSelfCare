import { Carousel } from "antd";
import { StepOne } from "./components/step-one";
import { StepTwo } from "./components/step-two";

function PageIntro() {
  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <div className="page-intro">
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
