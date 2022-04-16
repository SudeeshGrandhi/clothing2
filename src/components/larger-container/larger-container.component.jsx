import "./larger-container.styles.scss";
import SmallerContainer from "../smaller-container/smaller-container.component";

const LargerContainer = (props) => {
  const { categories } = props;

  return (
    <div className="larger-container">
      {categories.map(function (category) {
        return <SmallerContainer category={category} key={category.id} />;
      })}
    </div>
  );
};

export default LargerContainer;
