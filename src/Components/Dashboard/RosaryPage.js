import React, { useEffect, useState } from "react";
import "../../rosary.css";
import rosaryPrayers from "../../rosaryPrayers";
import RosaryComp from "./RosaryComp";

const RosaryPage = () => {
  const [landingButtonAnimate, setLandingButtonAnimate] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [decade, setDecade] = useState(0);

  const handleStartRosaryHelp = () => {
    if (landingButtonAnimate) {
      setLandingButtonAnimate(false);
      setCurrentStep(0);
    } else {
      setCurrentStep(1);
      setLandingButtonAnimate(true);
    }
  };

  useEffect(() => {
    if (currentStep < 8) {
      setDecade(7);
    } else if (currentStep > 7 && currentStep < 21) {
      setDecade(1);
    } else if (currentStep > 20 && currentStep < 34) {
      setDecade(2);
    } else if (currentStep > 33 && currentStep < 47) {
      setDecade(3);
    } else if (currentStep > 46 && currentStep < 60) {
      setDecade(4);
    } else if (currentStep > 59 && currentStep < 73) {
      setDecade(5);
    } else if (currentStep > 72 && currentStep < 75) {
      setDecade(6);
    } else {
      setDecade("");
    }
  }, [currentStep]);

  const handlePreviousStep = () => {
    if (currentStep === 1) {
      setCurrentStep(0);
      setLandingButtonAnimate(false);
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <>
      <div className="rosary_buttons">
        <p
          onClick={handlePreviousStep}
          className="rosary_help_back_button rosary_help_button"
        >
          Back
        </p>
        {currentStep !== 75 ? (
          <p
            onClick={handleNextStep}
            className="rosary_help_next_button rosary_help_button"
          >
            Next
          </p>
        ) : (
          <p
            onClick={handleStartRosaryHelp}
            className="rosary_help_next_button rosary_help_button"
          >
            Close
          </p>
        )}
      </div>
      <div className="rosary_container">
        <div className="rosary_landingPage">
          <h3 className="rosary_landingPage_title">Dear fellow Christian.</h3>
          <p className="rosary_landingPage_text">
            You're about to pray the Rosary. Would you like to see the prayers
            as a helper?
          </p>
          <div className="rosary_landingPage_choice_box">
            <p className="rosary_landingPage_choice">No, thanks</p>
            <p
              onClick={() => handleStartRosaryHelp()}
              className="rosary_landingPage_choice"
            >
              Yes, please
            </p>
          </div>
        </div>

        <div
          className={`rosary_help_container ${
            currentStep !== 0 ? "rosary_help_container_moveBack" : ""
          }`}
        >
          <div className="rosary_help_container_inner">
            {decade > 0 && (
              <div className="bead_counter">
                <div className="bead">
                  {decade === 1 && "First Decade"}
                  {decade === 2 && "Second Decade"}
                  {decade === 3 && "Third Decade"}
                  {decade === 4 && "Fourth Decade"}
                  {decade === 5 && "Fifth Decade"}
                  {decade === 6 && "Closing Prayers"}
                  {decade === 7 && "Starting the Rosary"}
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <>
                <h3 className="rosary_help_container_title">
                  Begin with the Sign of the Cross.
                </h3>
                <div className="rosary_help_container_cross">
                  <img
                    src="/assets/cross.svg"
                    alt="crucifix"
                    className="rosary_help_crucifix"
                  />
                  <img
                    src="/assets/hand.svg"
                    alt="hand"
                    className={`rosary_help_hand ${
                      landingButtonAnimate ? "rosary_help_hand_animate" : ""
                    }`}
                  />
                </div>
              </>
            )}
            {currentStep === 75 && (
              <>
                <h3 className="rosary_help_container_title">
                  End with the Sign of the Cross.
                </h3>
                <div className="rosary_help_container_cross">
                  <img
                    src="/assets/cross.svg"
                    alt="crucifix"
                    className="rosary_help_crucifix"
                  />
                  <img
                    src="/assets/hand.svg"
                    alt="hand"
                    className={`rosary_help_hand ${
                      landingButtonAnimate ? "rosary_help_hand_animate" : ""
                    }`}
                  />
                </div>
              </>
            )}
            {currentStep > 1 && (
              <>
                {rosaryPrayers.map((obj) => {
                  if (obj.bead.includes(currentStep)) {
                    return (
                      <RosaryComp
                        currentStep={currentStep}
                        key={obj.bead[0]}
                        obj={obj}
                      />
                    );
                  }
                  return null;
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RosaryPage;
