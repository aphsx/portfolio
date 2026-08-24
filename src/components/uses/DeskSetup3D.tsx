"use client";

import { Suspense, useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import DeskScene from "./desk3d/DeskScene";
import {
  DeskObjectId,
  DeskObjectLabels,
  DeskSelectionProvider,
} from "./desk3d/selection";

type DeskSetup3DProps = {
  isDark: boolean;
  labels: DeskObjectLabels;
};

function CanvasLoader() {
  return (
    <mesh>
      <boxGeometry args={[0.5, 0.05, 0.3]} />
      <meshStandardMaterial color="#9ca3af" wireframe />
    </mesh>
  );
}

export default function DeskSetup3D({ isDark, labels }: DeskSetup3DProps) {
  const [selected, setSelected] = useState<DeskObjectId | null>(null);
  const handleSelect = useCallback((id: DeskObjectId | null) => {
    setSelected(id);
  }, []);

  return (
    <div className="relative h-[280px] w-full sm:h-[320px]">
      <DeskSelectionProvider labels={labels} selected={selected} onSelect={handleSelect}>
        <Canvas
          shadows
          camera={{ position: [0, 1.04, 1.52], fov: 42 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 1.5]}
          onPointerMissed={() => setSelected(null)}
        >
          <Suspense fallback={<CanvasLoader />}>
            <DeskScene isDark={isDark} />
          </Suspense>
        </Canvas>
      </DeskSelectionProvider>

      <AnimatePresence>
        {selected && (
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-none absolute inset-x-0 bottom-4 z-10 flex justify-center px-4"
          >
            <div className="max-w-xs rounded-2xl border border-teal-500/25 bg-white/95 px-4 py-2.5 text-center shadow-lg backdrop-blur-sm dark:border-teal-400/20 dark:bg-gray-900/95">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {labels[selected]}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
