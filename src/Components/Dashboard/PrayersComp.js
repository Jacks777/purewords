import React from "react";
import "../../prayerpage.css";
import prayersData from "../../prayers";
import { Link } from "react-router-dom";

const PrayersComp = () => {
  const prayers = prayersData.prayers;

  return (
    <div className="prayers_container">
      <div className="prayers_container_inner">
        <h3 className="prayers_container_title">Prayers</h3>
        <div className="prayers_box_container">
          {/* Link to catholic prayers */}
          {/* Link to rosary */}
          <div className="prayer_row">
            <Link to={"/prayers/rosary"} className="prayers_box_option">
              Pray The Rosary
            </Link>
            <Link className="prayers_box_option">Most Important Prayers</Link>
          </div>
          <div className="prayer_row">
            <div className="prayers_box_option">Morning Prayers</div>
            <div className="prayers_box_option">prayers</div>
          </div>
          <div className="prayer_row">
            <div className="prayers_box_option">prayers</div>
            <div className="prayers_box_option">prayers</div>
          </div>

          {/* {prayers.map((prayer, index) => (
            <div className="prayers_box" key={index}>
              <h3 className="prayers_box_title">{prayer.title}</h3>
              <p className="prayers_box_content">{prayer.text}</p>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default PrayersComp;
