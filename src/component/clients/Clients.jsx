import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { data } from "./Data";
import "./clients.css";

const Clients = () => {
  return (
    <div className="container clients">
      <div className="center">
        <h1>What our clients have to say</h1>
        <p>
          Nexted has provided me with invaluable training and resources that
          have significantly enhanced my skills and confidence as an architect.
          the supportive community and advocacy for women in architecture are
          truly inspiring.
        </p>
        <div className="client-section">
          {data.map(({ h1, p }, index) => (
            <section className="profession">
              <div className="user">
                <FaRegUser className="user-icon"/>
              </div>
              <div className="pro-user">
                <h1>{h1}</h1>
                <p>{p}</p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
