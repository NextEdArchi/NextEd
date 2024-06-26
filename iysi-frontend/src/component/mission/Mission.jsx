
import Lazyloading from "../../template/Lazyloading";
import { Data } from "./Data";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import "./mission.css";

const Mission = () => {
  return (
    <div className="container mission">
      <div className="center">
        {Data.map(({ p, h1, img, alt, order1, order2 }, index) => {
          return (
            <div className="mission-data" key={index} >
                <Lazyloading className={`img ${order2}`} alt={alt} src={img} />
                <div className={order1} data-aos="zoom-in" data-aos-once="true">
                  <h1>{h1}</h1>
                  <p>{p}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mission;
