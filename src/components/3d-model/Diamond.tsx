/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";

export default function Diamond(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/diamond.glb") as any;
  const ref = useRef<Group>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
      ref.current.rotation.x += 0.01;
      ref.current.rotation.z += 0.01;
      ref.current.position.y += 0.02;

      if (ref.current.position.y > 8) {
        ref.current.position.y = -8;
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

useGLTF.preload("/diamond.glb");
