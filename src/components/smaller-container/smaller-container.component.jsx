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
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default SmallerContainer;
