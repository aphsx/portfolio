"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../contexts/theme/ThemeProvider";
import { useLocalizedData } from "../../hooks";
import { UsesRepository } from "../../data";

const MONITOR_IDS = {
  portrait: "uses-monitor-acer",
  landscape: "uses-monitor-lenovo-27q10",
} as const;

export const DESK_WIDTH_CM = 170;
export const DESK_DEPTH_CM = 70;

const VIEW_W = 520;
const VIEW_H = 300;

type Palette = {
  deskTop: string;
  deskFront: string;
  deskSide: string;
  bezel: string;
  bezelSide: string;
  bezelTop: string;
  stand: string;
  keyboard: string;
  keyboardTop: string;
  keyboardFront: string;
  mouse: string;
  mouseTop: string;
  shadow: string;
  floor: string;
  label: string;
  accent: string;
  bg: string;
};

const palettes: Record<"light" | "dark", Palette> = {
  light: {
    deskTop: "#c9956a",
    deskFront: "#a8744a",
    deskSide: "#8f6340",
    bezel: "#18181b",
    bezelSide: "#27272a",
    bezelTop: "#3f3f46",
    stand: "#3f3f46",
    keyboard: "#27272a",
    keyboardTop: "#3f3f46",
    keyboardFront: "#18181b",
    mouse: "#27272a",
    mouseTop: "#52525b",
    shadow: "rgba(15,23,42,0.18)",
    floor: "rgba(180,140,100,0.12)",
    label: "#374151",
    accent: "#0d9488",
    bg: "#f9fafb",
  },
  dark: {
    deskTop: "#3d2e22",
    deskFront: "#2a1f17",
    deskSide: "#1f1712",
    bezel: "#09090b",
    bezelSide: "#18181b",
    bezelTop: "#27272a",
    stand: "#27272a",
    keyboard: "#18181b",
    keyboardTop: "#27272a",
    keyboardFront: "#09090b",
    mouse: "#18181b",
    mouseTop: "#3f3f46",
    shadow: "rgba(0,0,0,0.45)",
    floor: "rgba(0,0,0,0.25)",
    label: "#e5e7eb",
    accent: "#2dd4bf",
    bg: "#111827",
  },
};

function MonitorFront({
  x,
  y,
  w,
  h,
  depth,
  palette,
  screenId,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  depth: number;
  palette: Palette;
  screenId: string;
}) {
  const bezel = 5;
  const screenX = x + bezel;
  const screenY = y + bezel;
  const screenW = w - bezel * 2;
  const screenH = h - bezel * 2 - 3;
  const neckW = Math.max(w * 0.14, 8);
  const neckX = x + w / 2 - neckW / 2;
  const neckY = y + h;
  const neckH = 12;
  const baseW = w * 0.38;
  const baseX = x + w / 2 - baseW / 2;
  const baseY = neckY + neckH;

  return (
    <g>
      <path
        d={`M ${x + w} ${y} L ${x + w + depth} ${y + depth * 0.35} L ${x + w + depth} ${y + h + depth * 0.35} L ${x + w} ${y + h} Z`}
        fill={palette.bezelSide}
      />
      <path
        d={`M ${x} ${y} L ${x + w} ${y} L ${x + w + depth} ${y + depth * 0.35} L ${x + depth} ${y + depth * 0.35} Z`}
        fill={palette.bezelTop}
      />
      <rect x={x} y={y} width={w} height={h} rx={4} fill={palette.bezel} />
      <rect x={screenX} y={screenY} width={screenW} height={screenH} rx={2} fill={`url(#${screenId})`} />
      <rect x={screenX} y={screenY} width={screenW} height={screenH} rx={2} fill="url(#screen-shine)" opacity={0.3} />
      <rect x={screenX} y={screenY + screenH - 3} width={screenW} height={2} rx={1} fill="#14b8a6" opacity={0.4} />
      <rect x={neckX} y={neckY} width={neckW} height={neckH} rx={1} fill={palette.stand} />
      <rect x={baseX} y={baseY} width={baseW} height={5} rx={2} fill={palette.stand} />
    </g>
  );
}

function DeskSetupScene({ palette }: { palette: Palette }) {
  const deskVisualW = 440;
  const deskLeft = (VIEW_W - deskVisualW) / 2;
  const deskRight = deskLeft + deskVisualW;
  const deskDepthVisual = deskVisualW * (DESK_DEPTH_CM / DESK_WIDTH_CM) * 0.32;
  const deskTopBand = deskDepthVisual * 0.3;
  const deskFrontH = deskDepthVisual * 0.7;
  const deskTopY = 188;
  const deskBackInset = deskVisualW * 0.032;

  const portrait = { x: deskLeft + 24, y: 28, w: 62, h: 122, depth: 6 };
  const landscape = { x: deskLeft + 142, y: 40, w: 218, h: 108, depth: 7 };
  const keyboard = { x: deskLeft + 162, y: deskTopY - 28, w: 168, topH: 8, frontH: 6 };
  const mouse = { x: deskLeft + 348, y: deskTopY - 24, w: 34, h: 20, topH: 5 };

  const keyCols = 13;
  const keyRows = 4;

  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      className="mx-auto w-full max-w-xl"
      role="img"
      aria-hidden
    >
      <defs>
        <linearGradient id="screen-portrait" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.55" />
          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0f766e" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="screen-landscape" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#0891b2" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#115e59" stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id="screen-shine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.06" />
        </linearGradient>
        <linearGradient id="scene-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={palette.bg} stopOpacity="0.6" />
          <stop offset="100%" stopColor={palette.bg} stopOpacity="0" />
        </linearGradient>
        <filter id="desk-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="5" stdDeviation="7" floodColor={palette.shadow} />
        </filter>
      </defs>

      <rect x="0" y="0" width={VIEW_W} height={VIEW_H} fill="url(#scene-bg)" />

      <ellipse
        cx={VIEW_W / 2}
        cy={deskTopY + deskFrontH + 24}
        rx={175}
        ry={18}
        fill={palette.floor}
      />

      <g filter="url(#desk-shadow)">
        <path
          d={`M ${deskLeft} ${deskTopY} L ${deskRight} ${deskTopY} L ${deskRight - deskBackInset} ${deskTopY + deskTopBand} L ${deskLeft + deskBackInset} ${deskTopY + deskTopBand} Z`}
          fill={palette.deskTop}
        />
        <path
          d={`M ${deskLeft} ${deskTopY} L ${deskLeft + deskBackInset} ${deskTopY + deskTopBand} L ${deskLeft + deskBackInset} ${deskTopY + deskFrontH} L ${deskLeft} ${deskTopY + deskFrontH - deskTopBand} Z`}
          fill={palette.deskSide}
        />
        <rect
          x={deskLeft + deskBackInset}
          y={deskTopY + deskTopBand}
          width={deskRight - deskLeft - deskBackInset * 2}
          height={deskFrontH - deskTopBand}
          fill={palette.deskFront}
        />
      </g>

      <MonitorFront {...portrait} palette={palette} screenId="screen-portrait" />
      <MonitorFront {...landscape} palette={palette} screenId="screen-landscape" />

      <g>
        <path
          d={`M ${mouse.x} ${mouse.y} L ${mouse.x + mouse.w} ${mouse.y} L ${mouse.x + mouse.w - 3} ${mouse.y + mouse.topH} L ${mouse.x + 3} ${mouse.y + mouse.topH} Z`}
          fill={palette.mouseTop}
        />
        <ellipse
          cx={mouse.x + mouse.w / 2}
          cy={mouse.y + mouse.topH + mouse.h / 2 - 2}
          rx={mouse.w / 2}
          ry={mouse.h / 2}
          fill={palette.mouse}
        />
      </g>

      <g>
        <path
          d={`M ${keyboard.x} ${keyboard.y} L ${keyboard.x + keyboard.w} ${keyboard.y} L ${keyboard.x + keyboard.w - 4} ${keyboard.y + keyboard.topH} L ${keyboard.x + 4} ${keyboard.y + keyboard.topH} Z`}
          fill={palette.keyboardTop}
        />
        <path
          d={`M ${keyboard.x + 4} ${keyboard.y + keyboard.topH} L ${keyboard.x + keyboard.w - 4} ${keyboard.y + keyboard.topH} L ${keyboard.x + keyboard.w - 4} ${keyboard.y + keyboard.topH + keyboard.frontH} L ${keyboard.x + 4} ${keyboard.y + keyboard.topH + keyboard.frontH} Z`}
          fill={palette.keyboardFront}
        />
        {Array.from({ length: keyRows }).map((_, row) =>
          Array.from({ length: keyCols }).map((_, col) => {
            const kw = (keyboard.w - 20) / keyCols - 1.4;
            const kx = keyboard.x + 10 + col * (kw + 1.4);
            const ky = keyboard.y + 2 + row * 1.7;
            return (
              <rect
                key={`${row}-${col}`}
                x={kx}
                y={ky}
                width={kw}
                height={1.4}
                rx={0.3}
                fill={palette.bezelTop}
                opacity={0.8}
              />
            );
          }),
        )}
      </g>

      <text
        x={VIEW_W / 2}
        y={deskTopY + deskFrontH + 14}
        textAnchor="middle"
        fill={palette.label}
        fontSize={9}
        opacity={0.7}
      >
        {DESK_WIDTH_CM} × {DESK_DEPTH_CM} cm
      </text>
    </svg>
  );
}

const DeskSetup = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const { getLocalized } = useLocalizedData();
  const palette = palettes[isDark ? "dark" : "light"];
  const workstation = UsesRepository.getCategoryById("uses-cat-workstation");

  const portraitName =
    workstation?.items.find((item) => item.id === MONITOR_IDS.portrait)?.name;
  const landscapeName =
    workstation?.items.find((item) => item.id === MONITOR_IDS.landscape)?.name;

  if (!portraitName || !landscapeName) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
    >
      <div className="flex items-start justify-between gap-3 border-b border-gray-100 px-4 py-3 dark:border-gray-700">
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            {t("uses.deskSetup.title")}
          </h3>
          <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
            {t("uses.deskSetup.description", {
              width: DESK_WIDTH_CM,
              depth: DESK_DEPTH_CM,
            })}
          </p>
        </div>
        <span className="shrink-0 rounded-full bg-teal-50 px-2 py-0.5 text-[10px] font-semibold text-teal-700 dark:bg-teal-950/50 dark:text-teal-300">
          {DESK_WIDTH_CM}×{DESK_DEPTH_CM}
        </span>
      </div>

      <div
        className="relative px-2 py-6 sm:px-4 sm:py-8"
        aria-label={t("uses.deskSetup.ariaLabel")}
      >
        <DeskSetupScene palette={palette} />

        <div className="mx-auto mt-3 grid max-w-xl grid-cols-2 gap-3 px-2 sm:gap-5">
          {[
            { name: getLocalized(portraitName), tag: t("uses.deskSetup.portrait") },
            { name: getLocalized(landscapeName), tag: t("uses.deskSetup.landscape") },
          ].map((item) => (
            <div key={item.tag} className="text-center">
              <p className="text-[11px] font-semibold leading-tight text-gray-800 dark:text-gray-100 sm:text-xs">
                {item.name}
              </p>
              <p className="mt-0.5 text-[10px] uppercase tracking-wider text-teal-600 dark:text-teal-400">
                {item.tag}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DeskSetup;
