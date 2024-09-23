/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";
import { useFrame, useThree } from "@react-three/fiber";

export function StromTrooper(props: JSX.IntrinsicElements["group"]) {
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

useGLTF.preload("/scene.gltf");
