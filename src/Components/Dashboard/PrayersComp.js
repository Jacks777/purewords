import React from "react";
import "../../prayerpage.css";
import prayersData from "../../prayers";

const PrayersComp = () => {
  const prayers = prayersData.prayers;

  return (
    <div className="prayers_container">
      <div className="prayers_container_inner">
        <h3 className="prayers_container_title">All Catholic Prayers</h3>
        <div className="prayers_box_container">
          {prayers.map((prayer, index) => (
            <div className="prayers_box" key={index}>
              <h3 className="prayers_box_title">{prayer.title}</h3>
              <p className="prayers_box_content">{prayer.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrayersComp;
