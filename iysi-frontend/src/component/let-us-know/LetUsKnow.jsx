
import "./letUsKnow.css";
import a from "../../asset/images/letUsKnow.webp";
import LazyLoading from "../../template/Lazyloading";

const LetUsKnow = () => {
  return (
    <div className="container let-us-know">
      <div className="center">
        <LazyLoading src={a} alt="let us know" />
        <div className="form">
        </div>
      </div>
    </div>
  );
};

export default LetUsKnow;
