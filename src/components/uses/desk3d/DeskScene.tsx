"use client";

import { ContactShadows, Environment, OrbitControls, RoundedBox } from "@react-three/drei";
import { sceneThemes, DESK_D, DESK_SURFACE_Y, DESK_TOP_T, DESK_TOP_Y, DESK_W } from "./constants";
import { ClickableItem } from "./selection";

const metal = { roughness: 0.28, metalness: 0.72 };
const plastic = { roughness: 0.48, metalness: 0.12 };

function Monitor({
  position,
  rotation = [0, 0, 0],
  size,
  theme,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  size: [number, number, number];
  theme: (typeof sceneThemes)["light"];
}) {
  const [w, h, d] = size;
  const neckW = Math.max(w * 0.055, 0.022);
  const neckH = 0.095;
  const baseW = w * 0.28;
  const baseD = d * 1.6;
  const baseH = 0.011;
  const pivotY = h / 2 + neckH + baseH;

  return (
    <group position={position}>
      <group rotation={rotation}>
        <group position={[0, pivotY, 0]}>
          <RoundedBox args={[w, h, d]} radius={0.004} smoothness={4} castShadow receiveShadow>
            <meshStandardMaterial color={theme.bezel} {...plastic} />
          </RoundedBox>

          <mesh position={[0, -h / 2 - neckH / 2, -0.006]} castShadow>
            <boxGeometry args={[neckW, neckH, 0.016]} />
            <meshStandardMaterial color={theme.stand} {...metal} />
          </mesh>

          <RoundedBox
            args={[baseW, baseH, baseD]}
            radius={0.003}
            smoothness={3}
            position={[0, -h / 2 - neckH - baseH / 2, 0.004]}
            castShadow
            receiveShadow
          >
            <meshStandardMaterial color={theme.stand} {...metal} />
          </RoundedBox>
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
  const w = 0.304;
  const d = 0.214;
  const baseH = 0.009;
  const lidH = 0.007;

  return (
    <group position={position} rotation={rotation}>
      <RoundedBox args={[w, baseH, d]} radius={0.0035} smoothness={4} position={[0, baseH / 2, 0.004]} castShadow receiveShadow>
        <meshStandardMaterial color={theme.macbook} {...metal} />
      </RoundedBox>

      <RoundedBox args={[w - 0.003, lidH, d - 0.004]} radius={0.003} smoothness={4} position={[0, baseH + lidH / 2, 0]} castShadow>
        <meshStandardMaterial color={theme.macbook} {...metal} />
      </RoundedBox>

      <mesh position={[0, baseH + lidH + 0.0003, -0.004]} rotation={[-0.06, 0, 0]}>
        <boxGeometry args={[w - 0.018, 0.0006, d * 0.48]} />
        <meshStandardMaterial color="#48484d" roughness={0.35} metalness={0.55} />
      </mesh>

      <mesh position={[0, baseH + lidH + 0.0005, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.006, 24]} />
        <meshStandardMaterial color="#b0b0b5" roughness={0.3} metalness={0.8} />
      </mesh>
    </group>
  );
}

function Keyboard({ position, theme }: { position: [number, number, number]; theme: (typeof sceneThemes)["light"] }) {
  const w = 0.42;
  const d = 0.14;
  const h = 0.022;
  const cols = 14;
  const rows = 4;

  return (
    <group position={position} rotation={[-0.04, 0, 0]}>
      <RoundedBox args={[w, h, d]} radius={0.004} smoothness={3} castShadow receiveShadow>
        <meshStandardMaterial color={theme.keyboard} {...plastic} />
      </RoundedBox>

      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: cols }).map((_, col) => {
          const kw = (w - 0.04) / cols - 0.004;
          const kh = 0.012;
          const kd = 0.012;
          const x = -w / 2 + 0.022 + col * (kw + 0.004) + kw / 2;
          const z = -d / 2 + 0.022 + row * (kh + 0.005) + kh / 2;
          return (
            <RoundedBox
              key={`${row}-${col}`}
              args={[kw, kd, kh]}
              radius={0.001}
              smoothness={2}
              position={[x, h / 2 + kd / 2 + 0.001, z]}
            >
              <meshStandardMaterial color="#3f3f46" roughness={0.65} metalness={0.08} />
            </RoundedBox>
          );
        }),
      )}
    </group>
  );
}

function Mouse({
  position,
  rotation = [0, 0, 0],
  theme,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  theme: (typeof sceneThemes)["light"];
}) {
  return (
    <group position={position} rotation={rotation}>
      <RoundedBox args={[0.068, 0.026, 0.098]} radius={0.014} smoothness={5} castShadow receiveShadow>
        <meshStandardMaterial color={theme.mouse} {...plastic} />
      </RoundedBox>

      <RoundedBox args={[0.064, 0.008, 0.042]} radius={0.006} smoothness={3} position={[0, 0.014, -0.024]}>
        <meshStandardMaterial color="#1f1f23" roughness={0.55} metalness={0.1} />
      </RoundedBox>

      <mesh position={[0, 0.016, -0.018]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.0035, 0.0035, 0.014, 12]} />
        <meshStandardMaterial color="#52525b" roughness={0.4} metalness={0.35} />
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

      <mesh position={[0, undersideY - 0.02, -0.02]} castShadow>
        <boxGeometry args={[DESK_W - 0.18, 0.028, 0.038]} />
        <meshStandardMaterial color={theme.deskLeg} {...frameMetal} />
      </mesh>

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
  const monitorZ = -0.11;
  const mainMonitorX = 0;
  const mainW = 0.6;
  const portraitW = 0.28;
  const gap = 0.015;
  const portraitX = mainMonitorX - mainW / 2 - gap - portraitW / 2;
  const monitorHitboxY = 0.28;

  return (
    <group>
      <ClickableItem
        id="desk"
        hitbox={[DESK_W, DESK_TOP_Y, DESK_D]}
        hitboxOffset={[0, DESK_TOP_Y / 2, 0]}
      >
        <Desk theme={theme} />
      </ClickableItem>

      <ClickableItem
        id="monitor-portrait"
        hitbox={[portraitW, 0.55, 0.1]}
        hitboxOffset={[0, monitorHitboxY, 0]}
        position={[portraitX, DESK_SURFACE_Y, monitorZ]}
      >
        <Monitor
          position={[0, 0, 0]}
          rotation={[0, 0.32, 0]}
          size={[portraitW, 0.5, 0.028]}
          theme={theme}
        />
      </ClickableItem>

      <ClickableItem
        id="monitor-main"
        hitbox={[mainW, 0.45, 0.1]}
        hitboxOffset={[0, monitorHitboxY, 0]}
        position={[mainMonitorX, DESK_SURFACE_Y, monitorZ]}
      >
        <Monitor
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          size={[mainW, 0.34, 0.028]}
          theme={theme}
        />
      </ClickableItem>

      <ClickableItem
        id="keyboard"
        hitbox={[0.42, 0.05, 0.16]}
        position={[0, DESK_SURFACE_Y + 0.012, 0.12]}
      >
        <Keyboard position={[0, 0, 0]} theme={theme} />
      </ClickableItem>

      <ClickableItem
        id="mouse"
        hitbox={[0.08, 0.05, 0.12]}
        position={[0.52, DESK_SURFACE_Y + 0.013, 0.1]}
      >
        <Mouse position={[0, 0, 0]} rotation={[0, -0.3, 0]} theme={theme} />
      </ClickableItem>

      <ClickableItem
        id="macbook"
        hitbox={[0.32, 0.02, 0.24]}
        position={[-0.58, DESK_SURFACE_Y, 0.08]}
      >
        <MacBook position={[0, 0, 0]} rotation={[0, 0.28, 0]} theme={theme} />
      </ClickableItem>
    </group>
  );
}

export default function DeskScene({ isDark }: { isDark: boolean }) {
  const theme = isDark ? sceneThemes.dark : sceneThemes.light;
  const monitorZ = -0.11;
  const mainScreenY = DESK_SURFACE_Y + 0.34 / 2 + 0.1 + 0.012;

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
