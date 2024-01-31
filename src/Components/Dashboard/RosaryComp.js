import React from "react";

const RosaryComp = ({ obj, currentStep }) => {
  return (
    <div key={obj.bead}>
      <h3 className="rosary_help_container_title">
        {obj.title}
        {currentStep > 3 && currentStep < 7 ? ` (${currentStep - 3}/3)` : null}
        {currentStep > 8 && currentStep < 19
          ? ` (${currentStep - 8}/10)`
          : null}
        {currentStep > 21 && currentStep < 32
          ? ` (${currentStep - 21}/10)`
          : null}
        {currentStep > 34 && currentStep < 45
          ? ` (${currentStep - 34}/10)`
          : null}
        {currentStep > 47 && currentStep < 58
          ? ` (${currentStep - 47}/10)`
          : null}
        {currentStep > 60 && currentStep < 71
          ? ` (${currentStep - 60}/10)`
          : null}
      </h3>
      <div className="rosary_help_container_prayer">
        <p
          className="rosary_help_prayer"
          dangerouslySetInnerHTML={{ __html: obj.prayer }}
        ></p>
      </div>
    </div>
  );
};

export default RosaryComp;
