import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Earth from "./Earth.jsx";

const Globe = () => {
  return (
    <div className="w-3/4 h-3/4 bg-slate-100">
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Globe;
