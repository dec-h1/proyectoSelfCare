function TitlePage(props) {
  const { title = "", suptitle = "" } = props;

  return (
    <div className="title-page bg-white text-center pt-6 pb-8">
      <img src="" alt="" />
      <h2 className="font-bold text-xl">{title}</h2>
      {suptitle.length > 0 && <h3 className="text-xs">{suptitle}</h3>}
    </div>
  );
}

export { TitlePage };
