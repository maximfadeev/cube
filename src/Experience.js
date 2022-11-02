import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Experience() {
  const groupRef = useRef();
  const sphereRef = useRef();
  const circleRef = useRef();

  useFrame((state, delta) => {
    // groupRef.current.rotation.x += delta;
    // groupRef.current.rotation.y += delta;
    // groupRef.current.rotation.z += delta;
    // sphereRef.current.scale.x += delta;
    // circleRef.current.scale.y += delta;
  });
  return (
    <>
      <group ref={groupRef}>
        <mesh ref={sphereRef} position-x={-2}>
          <sphereGeometry />
          <meshBasicMaterial color="orange" />
        </mesh>
        <mesh position-x={2} scale={1.5}>
          <boxGeometry />
          <meshBasicMaterial color="purple" />
        </mesh>
      </group>
      <mesh ref={circleRef} rotation-y={Math.PI * 0.25}>
        <circleGeometry />
        <meshBasicMaterial />
      </mesh>
      <mesh scale={10} rotation-x={-Math.PI * 0.5} position-y={-1}>
        <planeGeometry />
        <meshBasicMaterial color="green" />
      </mesh>
    </>
  );
}
