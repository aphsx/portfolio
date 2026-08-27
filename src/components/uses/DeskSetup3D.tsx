"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import DeskScene from "./desk3d/DeskScene";

type DeskSetup3DProps = {
  isDark: boolean;
};

function CanvasLoader() {
  return (
    <mesh>
      <boxGeometry args={[0.5, 0.05, 0.3]} />
      <meshStandardMaterial color="#9ca3af" wireframe />
    </mesh>
  );
}

export default function DeskSetup3D({ isDark }: DeskSetup3DProps) {
  return (
    <div className="relative h-[280px] w-full sm:h-[320px]">
      <Canvas
        shadows
        camera={{ position: [0, 1.1, 2.05], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={<CanvasLoader />}>
          <DeskScene isDark={isDark} />
        </Suspense>
      </Canvas>
    </div>
  );
}
