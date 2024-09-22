import React, { Suspense } from "react";
import { StromTrooper } from "./StromTrooper";
import { Canvas, Vector3 } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";
import { Target } from "./Target";
import { Strawberry } from "./Strwaberry";
import Diamond from "./Diamond";

const ModelLoader = () => {
  const progress = useProgress();

  return (
    <Html
      as={"div"}
      center
      className="text-[10vh] flex justify-center items-center text-white text-nowrap "
    >
      {progress.progress.toPrecision(2)}% LOADED
    </Html>
  );
};

const targetPositions: Vector3[] = [
  [3, 2, 0],
  [-3.5, 3, 0],
  [4.5, 0, 0],
  [3, -2, 0],
  [4, -4, 0],
  [-1, 1, 0],
  [5.5, 3, 0],
  [-5.5, 4.5, 0],
  [5.5, 5, 0],
  [-3.5, -2, 0],
  [-4, -4, 0],
  [-5, 0, 0],
  [0.5, 2, 0],
];
const diamondPositions: Vector3[] = [
  [-11, 6.8, -4],
  [-9.8, -7.2, -4],
  [-9.2, 3.6, -4],
  [-7.9, 1.2, -4],
  [-7.4, -2.8, -4],
  [-6.2, 5.3, -4],
  [-5, -6.1, -4],
  [-4.1, 7.4, -4],
  [-3.4, -3.3, -4],
  [-2, 4.8, -4],
  [-1.3, -7.6, -4],
  [0.9, 6.3, -4],
  [2.4, -1.5, -4],
  [3.2, 2.2, -4],
  [4.3, -4.9, -4],
  [4.8, 5.7, -4],
  [6.1, -2.4, -4],
  [6.6, 3.9, -4],
  [7.9, -5.2, -4],
  [8.7, 2.8, -4],
  [11.5, 1.5, -4],
  [10.6, -3.7, -4],
  [10.1, 4.3, -4],
  [-8.7, -6.8, -4],
  [-8.4, 0.4, -4],
  [-6.9, 6.1, -4],
  [-5.6, -5.6, -4],
  [-5.3, 2.5, -4],
  [-3.8, -4.4, -4],
  [-3.1, 7.2, -4],
];

const strawberryPositions: Vector3[] = [
  [-7, 6, -1],
  [-6, -1, -1],
  [-5, 2, -1],
  [-4, -3, -1],
  [-3, 4, -1],
  [-2, 0, -1],
  [-1, 5, -1],
  [0, -2, -1],
  [1, 6, -1],
  [2, -5, -1],
  [3, -4, -1],
  [4, 3, -1],
  [5, -6, -1],
  [-7, 1, -1],
  [-6, 5, -1],
  [-5, -4, -1],
  [-4, 2, -1],
  [-3, -6, -1],
  [-2, 4, -1],
  [0, 3, -1],
  [1, -1, -1],
  [2, -6, -1],
  [3, 1, -1],
  [4, -2, -1],
  [5, -5, -1],
  [6, 2, -1],
  [7, -3, -1],
];

const Model = () => {
  return (
    <Canvas className="bg-black">
      <Suspense fallback={<ModelLoader />}>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.5} position={[10, 10, 0]} />
        <ambientLight intensity={0.5} position={[-10, -10, 0]} />
        <directionalLight color="white" position={[10, 10, 10]} />
        <directionalLight color="white" position={[-10, -10, -10]} />
        <StromTrooper />
        {targetPositions.map((pos, index) => (
          <Target key={index} position={pos} />
        ))}

        {strawberryPositions.map((pos, index) => (
          <Strawberry key={index} position={pos} />
        ))}
        {diamondPositions.map((pos, index) => (
          <Diamond key={index} position={pos} />
        ))}
      </Suspense>
    </Canvas>
  );
};

export default Model;
