import React from "react";
import "./upcomingEvents.css";
import { upcomingEvents } from "./Data";
import Lazyloading from "../../template/Lazyloading";
import { GoArrowRight } from "react-icons/go";

const UpcomingEvents = () => {
  return (
    <div className="container upcoming-events">
      <div className="center">
        <h1>Upcoming Events</h1>
        <p>
          where industry leaders and emerging talents will converge for an
          inspiring day of workshops, panel discussions, and networking
          opportunities aimed at shaping the future of architecture.
        </p>
        <article>
          {upcomingEvents.map(
            ({ imgPath, h1, location, description, alt }, index) => {
              return (
                <section key={index}>
                  <Lazyloading src={imgPath} alt={alt} />
                  <div>
                    <h1>{h1}</h1>
                    <ul>
                      <li>
                        <span>Location:</span>
                        {location}
                      </li>
                      <li>
                        <span>Description:</span>
                        {description}
                      </li>
                    </ul>
                    <button>
                      Register your interest <GoArrowRight size="20" />
                    </button>
                  </div>
                </section>
              );
            }
          )}
        </article>
      </div>
    </div>
  );
};

export default UpcomingEvents;