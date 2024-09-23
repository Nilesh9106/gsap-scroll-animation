/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

export default function Diamond(props: JSX.IntrinsicElements["group"]) {
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

useGLTF.preload("/diamond.glb");
