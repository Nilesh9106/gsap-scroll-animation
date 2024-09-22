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
    if (groupRef.current) {
      groupRef.current.position.y =
        -2 + Math.sin(window.performance.now() / 1000) * 0.1;
      // on mouse move my group should rotateX towards cursor little bit
      groupRef.current.rotation.y = mouse.x / 20;
    }
    // move camera to follow mouse little
    camera.position.x = mouse.x / 5;
    camera.position.y = mouse.y / 5;
  });
  return (
    <group {...props} position={[0, -4.5, 1]} dispose={null}>
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
