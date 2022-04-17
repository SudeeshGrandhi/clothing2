import "./smaller-container.styles.scss";
const SmallerContainer = (props) => {
  const { imageUrl, title } = props.category;
  return (
    <div className="smaller-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="body-container">
        <h2>{title.toLocaleUpperCase()}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};

export default SmallerContainer;
