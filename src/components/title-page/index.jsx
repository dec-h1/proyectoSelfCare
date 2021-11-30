import toplogo from "../../images/top-logo-face.png";
function TitlePage(props) {
  const { title = "", subtitle = ""} = props;

  return (
    <div className="title-page bg-secondary text-center object-center pt-6">
      <img className="pl-20 h-36" src={toplogo} alt="selfcare-logo-top-face" />
      <h2 className="font-bold text-2xl pb-4">{title}</h2>
      {subtitle.length > 0 && <h3 className="text-base text-gray-400 pl-10 pr-10 pb-20">{subtitle}</h3>}
    </div>
  );
}

export { TitlePage };
