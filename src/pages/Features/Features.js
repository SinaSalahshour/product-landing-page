import React from "react";

import FeaturesComponent from "../../components/FeaturesComponent";
import {
  featuresObjOne,
  featuresObjThree,
  featuresObjTwo,
  featuresObjFour,
} from "./FeaturesData";

const Features = () => {
  return (
    <>
      <FeaturesComponent {...featuresObjOne} />
      <FeaturesComponent {...featuresObjTwo} />
      <FeaturesComponent {...featuresObjThree} />
      <FeaturesComponent {...featuresObjFour} />
    </>
  );
};

export default Features;
