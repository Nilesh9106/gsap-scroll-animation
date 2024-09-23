import { EffectComposer } from "@react-three/postprocessing";
import { Fluid } from "@whatisjery/react-fluid-distortion";
import React from "react";

const LiquidDistortion = () => {
  return (
    <>
      <EffectComposer>
        <Fluid
          rainbow={false}
          fluidColor="#030303"
          radius={0.15}
          swirl={0.5}
          // curl={50}
          distortion={0.3}
          intensity={2}
          force={1}
        />
      </EffectComposer>
    </>
  );
};

export default LiquidDistortion;
