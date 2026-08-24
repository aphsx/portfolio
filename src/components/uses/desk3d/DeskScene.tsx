"use client";

import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { sceneThemes, DESK_D, DESK_TOP_T, DESK_TOP_Y, DESK_W } from "./constants";

function Monitor({
  position,
  rotation = [0, 0, 0],
  size,
  theme,
  screenColor,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  size: [number, number, number];
  theme: (typeof sceneThemes)["light"];
  screenColor: string;
}) {
  const [w, h, d] = size;
  const bezel = 0.018;
  const neckW = w * 0.12;
  const neckH = 0.1;
  const baseW = w * 0.32;
  const baseH = 0.012;
  const pivotY = h / 2 + neckH + baseH;

  return (
    <group position={position}>
      <group rotation={rotation}>
        <group position={[0, pivotY, 0]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[w, h, d]} />
            <meshStandardMaterial color={theme.bezel} roughness={0.35} metalness={0.15} />
          </mesh>
          <mesh position={[0, 0, d / 2 + 0.001]}>
            <boxGeometry args={[w - bezel * 2, h - bezel * 2, 0.004]} />
            <meshStandardMaterial
              color={screenColor}
              emissive={screenColor}
              emissiveIntensity={0.35}
              roughness={0.2}
              metalness={0.1}
            />
          </mesh>
          <mesh position={[0, -h / 2 - neckH / 2, 0]} castShadow>
            <boxGeometry args={[neckW, neckH, d * 0.6]} />
            <meshStandardMaterial color={theme.stand} roughness={0.5} />
          </mesh>
          <mesh position={[0, -h / 2 - neckH - baseH / 2, 0]} castShadow receiveShadow>
            <boxGeometry args={[baseW, baseH, d * 1.4]} />
            <meshStandardMaterial color={theme.stand} roughness={0.5} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

function MacBook({
  position,
  rotation = [0, 0, 0],
  theme,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  theme: (typeof sceneThemes)["light"];
}) {
  const w = 0.3;
  const d = 0.21;
  const h = 0.016;
  const body = { roughness: 0.35, metalness: 0.65 };

  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, h / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[w, h, d]} />
        <meshStandardMaterial color={theme.macbook} {...body} />
      </mesh>
      <mesh position={[0, h + 0.0004, -0.012]} receiveShadow>
        <boxGeometry args={[w - 0.008, 0.0008, d * 0.52]} />
        <meshStandardMaterial color="#5c5c62" roughness={0.4} metalness={0.5} />
      </mesh>
    </group>
  );
}

function Desk({ theme }: { theme: (typeof sceneThemes)["light"] }) {
  const topCenterY = DESK_TOP_Y - DESK_TOP_T / 2;
  const undersideY = DESK_TOP_Y - DESK_TOP_T;
  const columnH = undersideY - 0.002;
  const columnW = 0.055;
  const columnD = 0.07;
  const footH = 0.028;
  const footD = DESK_D * 0.52;
  const legX = DESK_W / 2 - 0.1;
  const frameMetal = { roughness: 0.45, metalness: 0.55 };

  return (
    <group>
      <mesh position={[0, topCenterY, 0]} castShadow receiveShadow>
        <boxGeometry args={[DESK_W, DESK_TOP_T, DESK_D]} />
        <meshStandardMaterial color={theme.desk} roughness={0.75} metalness={0.05} />
      </mesh>

      {/* crossbar sits just under the desktop */}
      <mesh position={[0, undersideY - 0.02, -0.02]} castShadow>
        <boxGeometry args={[DESK_W - 0.18, 0.028, 0.038]} />
        <meshStandardMaterial color={theme.deskLeg} {...frameMetal} />
      </mesh>

      {/* 2 legs — stop at the underside, not through the top */}
      {([-legX, legX] as const).map((x) => (
        <group key={x}>
          <mesh position={[x, columnH / 2, 0]} castShadow>
            <boxGeometry args={[columnW, columnH, columnD]} />
            <meshStandardMaterial color={theme.deskLeg} {...frameMetal} />
          </mesh>
          <mesh position={[x, footH / 2, 0]} castShadow receiveShadow>
            <boxGeometry args={[columnW + 0.01, footH, footD]} />
            <meshStandardMaterial color={theme.deskLeg} {...frameMetal} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Workstation({ theme }: { theme: (typeof sceneThemes)["light"] }) {
  const surfaceY = DESK_TOP_Y + DESK_TOP_T / 2;
  const monitorZ = -0.11;
  const mainMonitorX = 0;
  const mainW = 0.6;
  const portraitW = 0.28;
  const gap = 0.015;
  const portraitX = mainMonitorX - mainW / 2 - gap - portraitW / 2;
  const macPos: [number, number, number] = [-0.58, surfaceY, 0.08];

  return (
    <group>
      <Desk theme={theme} />

      <Monitor
        position={[portraitX, surfaceY, monitorZ]}
        rotation={[0, 0.32, 0]}
        size={[portraitW, 0.5, 0.035]}
        theme={theme}
        screenColor={theme.screenPortrait}
      />

      <Monitor
        position={[mainMonitorX, surfaceY, monitorZ]}
        rotation={[0, 0, 0]}
        size={[mainW, 0.34, 0.035]}
        theme={theme}
        screenColor={theme.screenLandscape}
      />

      <mesh position={[0, surfaceY + 0.012, 0.12]} castShadow receiveShadow>
        <boxGeometry args={[0.42, 0.024, 0.14]} />
        <meshStandardMaterial color={theme.keyboard} roughness={0.55} metalness={0.1} />
      </mesh>

      <mesh position={[0.52, surfaceY + 0.016, 0.1]} castShadow receiveShadow rotation={[0, -0.3, 0]}>
        <boxGeometry args={[0.065, 0.028, 0.095]} />
        <meshStandardMaterial color={theme.mouse} roughness={0.45} metalness={0.15} />
      </mesh>

      <MacBook position={macPos} rotation={[0, 0.28, 0]} theme={theme} />
    </group>
  );
}

export default function DeskScene({ isDark }: { isDark: boolean }) {
  const theme = isDark ? sceneThemes.dark : sceneThemes.light;
  const surfaceY = DESK_TOP_Y + DESK_TOP_T / 2;
  const monitorZ = -0.11;
  const mainScreenY = surfaceY + 0.34 / 2 + 0.1 + 0.012;

  return (
    <>
      <ambientLight intensity={isDark ? 0.35 : 0.55} />
      <directionalLight
        position={[2, 4, 3]}
        intensity={isDark ? 0.9 : 1.2}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-2, 2, -1]} intensity={0.25} />

      <Workstation theme={theme} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[6, 6]} />
        <meshStandardMaterial color={theme.floor} roughness={0.95} />
      </mesh>

      <ContactShadows
        position={[0, 0.001, 0]}
        opacity={isDark ? 0.45 : 0.3}
        scale={4}
        blur={2.5}
        far={2}
      />

      <Environment preset={isDark ? "city" : "apartment"} />

      <OrbitControls
        enablePan={false}
        minDistance={1.2}
        maxDistance={3.2}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.1}
        target={[0, mainScreenY, monitorZ]}
      />
    </>
  );
}
