/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

export function Target(props: JSX.IntrinsicElements["group"]) {
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

useGLTF.preload("/infinity_cube.glb");
