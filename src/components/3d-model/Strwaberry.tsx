/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";

export function Strawberry(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/strawberry.glb") as any;
  const ref = useRef<Group>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
      ref.current.rotation.x += 0.01;
      ref.current.rotation.z += 0.01;
      ref.current.position.y += 0.02;

      if (ref.current.position.y > 6) {
        ref.current.position.y = -5;
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

useGLTF.preload("/strawberry.glb");
