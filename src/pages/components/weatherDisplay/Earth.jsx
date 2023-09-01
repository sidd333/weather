import React, { useRef } from "react";
import EarthDayMap from "../../../assets/textures/8k_earth_daymap.jpg";
import EarthSpecularMap from "../../../assets/textures/8k_earth_specular_map.jpg";
import EarthClouds from "../../../assets/textures/8k_earth_clouds.jpg";
import EarthNormalMap from "../../../assets/textures/8k_earth_normal_map.jpg";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const Earth = () => {
  // let lat = 180 + 48.1667 * (Math.PI / 180);
  // let lng = 100.1667 * (Math.PI / 180);
  // let x = Math.sin(lng) * Math.sin(lat);
  // let y = Math.cos(lng) * Math.sin(lat);
  // let z = -Math.cos(lat);

  // console.log(x, y, z);
  const cloudsRef = useRef();
  const earthRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 6;
  });

  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthClouds]
  );

  return (
    <>
      <ambientLight intensity={1.2} />
      <pointLight color="white" position={[1, -2, 3]} intensity={2.2} />
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[2.856, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.5}
        />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
        />
      </mesh>
      <mesh ref={earthRef}>
        <sphereGeometry args={[2.8565, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.3}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
};

export default Earth;
