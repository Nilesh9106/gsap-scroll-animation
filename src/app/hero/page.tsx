/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Html, useGLTF, useProgress } from "@react-three/drei";
import { Canvas, useFrame, useThree, Vector3 } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { Fluid } from "@whatisjery/react-fluid-distortion";
import { Suspense, useRef } from "react";
import { Group } from "three";
import gsap from "gsap";

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

function StromTrooper(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/scene.gltf") as any;
  const groupRef = useRef<Group>(null);
  const { mouse } = useThree();
  useFrame(({ camera }) => {
    camera.rotation.x = -mouse.y / 40;
    camera.rotation.y = -mouse.x / 40;
  });
  return (
    <group {...props} position={[0, -6, 1]} dispose={null}>
      <group scale={0.04} ref={groupRef}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.m_body001_Material002_0.geometry}
          material={materials["Material.002"]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.m_hands_Material003_0.geometry}
          material={materials["Material.003"]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.m_helmet002_Material001_0.geometry}
          material={materials["Material.001"]}
          scale={100}
        />
      </group>
    </group>
  );
}

function Target(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/infinity_cube.glb") as any;
  const ref = useRef<Group>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
      ref.current.rotation.x += 0.01;
      ref.current.rotation.z += 0.01;
      ref.current.position.y += 0.01;

      if (ref.current.position.y > 6) {
        ref.current.position.y = -6;
      }
    }
  });
  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials["Material.001"]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        scale={0.4}
      />
    </group>
  );
}
function Strawberry(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/strawberry.glb") as any;
  const ref = useRef<Group>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.02;
      ref.current.rotation.x += 0.02;
      ref.current.rotation.z += 0.02;
      ref.current.position.y += 0.04;

      if (ref.current.position.y > 6) {
        ref.current.position.y = Math.random() - 5;
        gsap.from(ref.current.scale, {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.8,
          opacity: 0,
        });
      }
    }
  });
  return (
    <group ref={ref} {...props} dispose={null}>
      <group scale={0.3}>
        <group position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={1}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Maduixa_Fulles_maduixa001_0.geometry}
            material={materials["Fulles_maduixa.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Maduixa_Llavoretes_maduixa001_0.geometry}
            material={materials["Llavoretes_maduixa.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Maduixa_Maduixa001_0.geometry}
            material={materials["Maduixa.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Maduixa_Maduixa001_0_1.geometry}
            material={materials["Maduixa.001"]}
          />
        </group>
      </group>
    </group>
  );
}
function Diamond(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/diamond.glb") as any;
  materials.DiamondOutside.transparent = true;
  const ref = useRef<Group>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.02;
      ref.current.rotation.x += 0.02;
      ref.current.rotation.z += 0.02;
      ref.current.position.y += 0.03;

      if (ref.current.position.y > 8) {
        ref.current.position.y = Math.random() * (-5 + 7) - 7;

        gsap.from(ref.current.scale, {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.8,
          opacity: 0,
        });
      }
    }
  });
  return (
    <group {...props} ref={ref} dispose={null} scale={0.6}>
      <mesh
        geometry={nodes.pCone1_DiamondOutside_0.geometry}
        material={materials.DiamondOutside}
      ></mesh>
    </group>
  );
}

const Model = () => {
  return (
    <Canvas className="bg-black">
      <Suspense fallback={<ModelLoader />}>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.7} />
        <directionalLight color="white" position={[-6, 5, 2]} intensity={3} />
        <directionalLight color="white" position={[6, 5, 2]} intensity={3} />
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

const Page = () => {
  return (
    <>
      <div className="relative w-full h-full">
        <Model />
        <div className="absolute pointer-events-none top-0 left-0 w-full h-full flex flex-col gap-5 justify-center items-center">
          <h2 className="text-center text-white font-semibold">
            IS YOUR BIG IDEA READY TO GO WILD?
          </h2>
          <div className="flex flex-col mt-3 font-semibold">
            <h1 className="text-[16vh] text-white tracking-tighter  text-center">
              Let&apos;s Work
            </h1>
            <h1 className="text-[16vh] text-white  text-center">Together!</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

useGLTF.preload([
  "/scene.gltf",
  "/diamond.glb",
  "/strawberry.glb",
  "/infinity_cube.glb",
]);
