"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import { useThree } from "@react-three/fiber";

export type DeskObjectId =
  | "desk"
  | "monitor-portrait"
  | "monitor-main"
  | "keyboard"
  | "mouse"
  | "macbook";

export type DeskObjectLabels = Record<DeskObjectId, string>;

type DeskSelectionContextValue = {
  selected: DeskObjectId | null;
  select: (id: DeskObjectId | null) => void;
  labels: DeskObjectLabels;
};

const DeskSelectionContext = createContext<DeskSelectionContextValue | null>(null);

export function DeskSelectionProvider({
  labels,
  selected,
  onSelect,
  children,
}: {
  labels: DeskObjectLabels;
  selected: DeskObjectId | null;
  onSelect: (id: DeskObjectId | null) => void;
  children: ReactNode;
}) {
  const value = useMemo(
    () => ({ selected, select: onSelect, labels }),
    [selected, onSelect, labels],
  );

  return (
    <DeskSelectionContext.Provider value={value}>{children}</DeskSelectionContext.Provider>
  );
}

export function useDeskSelection() {
  const ctx = useContext(DeskSelectionContext);
  if (!ctx) throw new Error("useDeskSelection must be used within DeskSelectionProvider");
  return ctx;
}

export function ClickableItem({
  id,
  hitbox,
  position = [0, 0, 0],
  hitboxOffset = [0, 0, 0],
  children,
}: {
  id: DeskObjectId;
  hitbox: [number, number, number];
  position?: [number, number, number];
  hitboxOffset?: [number, number, number];
  children: ReactNode;
}) {
  const { select, selected } = useDeskSelection();
  const { gl } = useThree();
  const isSelected = selected === id;

  return (
    <group position={position}>
      <mesh
        position={hitboxOffset}
        onClick={(event) => {
          event.stopPropagation();
          select(id);
        }}
        onPointerOver={(event) => {
          event.stopPropagation();
          gl.domElement.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          gl.domElement.style.cursor = "";
        }}
      >
        <boxGeometry args={hitbox} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>

      <group scale={isSelected ? 1.015 : 1}>{children}</group>
    </group>
  );
}
