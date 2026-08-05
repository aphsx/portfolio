"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../contexts/theme/ThemeProvider";
import { useLocalizedData } from "../../hooks";
import { UsesRepository } from "../../data";
import { boxCorners, boxFaces, centerOffset, face, project } from "./isometric";

const MONITOR_IDS = {
  portrait: "uses-monitor-acer",
  landscape: "uses-monitor-lenovo-27q10",
} as const;

const ORIGIN: [number, number, number] = [0, 0, 0]
const SCALE = 9.2
const VIEW_W = 520
const VIEW_H = 300

type Palette = {
  deskTop: string
  deskFront: string
  deskSide: string
  deskEdge: string
  bezel: string
  bezelSide: string
  bezelTop: string
  stand: string
  standSide: string
  keyboard: string
  keyboardTop: string
  keyboardSide: string
  mouse: string
  mouseTop: string
  mouseSide: string
  shadow: string
  floor: string
  label: string
  labelMuted: string
  accent: string
}

const palettes: Record<"light" | "dark", Palette> = {
  light: {
    deskTop: "#c9956a",
    deskFront: "#a8744a",
    deskSide: "#b88358",
    deskEdge: "#8f6340",
    bezel: "#18181b",
    bezelSide: "#27272a",
    bezelTop: "#3f3f46",
    stand: "#3f3f46",
    standSide: "#27272a",
    keyboard: "#27272a",
    keyboardTop: "#3f3f46",
    keyboardSide: "#18181b",
    mouse: "#27272a",
    mouseTop: "#52525b",
    mouseSide: "#18181b",
    shadow: "rgba(15,23,42,0.18)",
    floor: "rgba(180,140,100,0.12)",
    label: "#374151",
    labelMuted: "#6b7280",
    accent: "#0d9488",
  },
  dark: {
    deskTop: "#3d2e22",
    deskFront: "#2a1f17",
    deskSide: "#32261c",
    deskEdge: "#1f1712",
    bezel: "#09090b",
    bezelSide: "#18181b",
    bezelTop: "#27272a",
    stand: "#27272a",
    standSide: "#18181b",
    keyboard: "#18181b",
    keyboardTop: "#27272a",
    keyboardSide: "#09090b",
    mouse: "#18181b",
    mouseTop: "#3f3f46",
    mouseSide: "#09090b",
    shadow: "rgba(0,0,0,0.45)",
    floor: "rgba(0,0,0,0.25)",
    label: "#e5e7eb",
    labelMuted: "#9ca3af",
    accent: "#2dd4bf",
  },
}

function MonitorIso({
  x,
  y,
  screenW,
  screenH,
  depth,
  palette,
  screenId,
}: {
  x: number
  y: number
  screenW: number
  screenH: number
  depth: number
  palette: Palette
  screenId: string
}) {
  const bezel = 0.38
  const body = boxFaces(x, y, 0, screenW, depth, screenH)
  const screen = boxFaces(x + bezel * 0.55, y - 0.02, bezel * 0.55, screenW - bezel, 0.06, screenH - bezel * 1.1)

  const neckW = screenW * 0.18
  const neckX = x + screenW / 2 - neckW / 2
  const neck = boxFaces(neckX, y + depth * 0.35, 0, neckW, depth * 0.55, 0.55)
  const base = boxFaces(neckX - neckW * 0.6, y + depth * 0.15, 0, neckW * 2.2, depth * 0.95, 0.22)

  return (
    <g>
      <path d={face(base.right, ORIGIN, SCALE)} fill={palette.standSide} />
      <path d={face(base.front, ORIGIN, SCALE)} fill={palette.stand} />
      <path d={face(base.top, ORIGIN, SCALE)} fill={palette.standSide} />
      <path d={face(neck.right, ORIGIN, SCALE)} fill={palette.standSide} />
      <path d={face(neck.front, ORIGIN, SCALE)} fill={palette.stand} />
      <path d={face(body.back, ORIGIN, SCALE)} fill={palette.bezelSide} />
      <path d={face(body.right, ORIGIN, SCALE)} fill={palette.bezelSide} />
      <path d={face(body.top, ORIGIN, SCALE)} fill={palette.bezelTop} />
      <path d={face(body.front, ORIGIN, SCALE)} fill={palette.bezel} />
      <path d={face(screen.front, ORIGIN, SCALE)} fill={`url(#${screenId})`} />
      <path
        d={face(screen.front, ORIGIN, SCALE)}
        fill="url(#screen-shine)"
        opacity={0.35}
      />
    </g>
  )
}

function DeskSetupScene({ palette }: { palette: Palette }) {
  const desk = boxFaces(0, 0, 0, 28, 15, 0.55)
  const deskEdge = boxFaces(0, 0, 0, 28, 0.55, 0.55)

  const portrait = { x: 1.2, y: 2.8, w: 4.6, h: 10.2, d: 0.55 }
  const landscape = { x: 8.8, y: 1.6, w: 14.8, h: 8.6, d: 0.55 }
  const keyboard = boxFaces(10.5, 8.8, 0.55, 10.8, 3.6, 0.38)
  const mouse = boxFaces(22.8, 9.6, 0.55, 2.4, 3.4, 0.42)

  const keyRows = [0.55, 1.15, 1.75, 2.35]
  const keyCols = [0.6, 1.35, 2.1, 2.85, 3.6, 4.35, 5.1, 5.85, 6.6, 7.35, 8.1, 8.85, 9.6]

  const scenePoints = [
    ...boxCorners(0, 0, 0, 28, 15, 0.55),
    ...boxCorners(portrait.x, portrait.y, 0, portrait.w, portrait.d, portrait.h),
    ...boxCorners(landscape.x, landscape.y, 0, landscape.w, landscape.d, landscape.h),
    ...boxCorners(10.5, 8.8, 0.55, 10.8, 3.6, 0.38),
    ...boxCorners(22.8, 9.6, 0.55, 2.4, 3.4, 0.42),
  ]

  const [offsetX, offsetY] = centerOffset(scenePoints, ORIGIN, SCALE, VIEW_W, VIEW_H)
  const shadowCenter = project([14, 7.5, 0], ORIGIN, SCALE)

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
          <stop offset="45%" stopColor="#06b6d4" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0f766e" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="screen-landscape" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.5" />
          <stop offset="40%" stopColor="#0891b2" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#115e59" stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id="screen-shine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="desk-grain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.06" />
        </linearGradient>
        <filter id="desk-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor={palette.shadow} />
        </filter>
      </defs>

      <g transform={`translate(${offsetX.toFixed(2)}, ${offsetY.toFixed(2)})`}>
      <ellipse
        cx={shadowCenter[0]}
        cy={shadowCenter[1] + 58}
        rx={118}
        ry={28}
        fill={palette.floor}
      />

      <g filter="url(#desk-shadow)">
        <path d={face(desk.left, ORIGIN, SCALE)} fill={palette.deskSide} />
        <path d={face(deskEdge.front, ORIGIN, SCALE)} fill={palette.deskFront} />
        <path d={face(desk.top, ORIGIN, SCALE)} fill={palette.deskTop} />
        <path
          d={face(desk.top, ORIGIN, SCALE)}
          fill="url(#desk-grain)"
          opacity={0.7}
        />
        <path d={face(deskEdge.right, ORIGIN, SCALE)} fill={palette.deskEdge} />
      </g>

      <MonitorIso
        x={portrait.x}
        y={portrait.y}
        screenW={portrait.w}
        screenH={portrait.h}
        depth={portrait.d}
        palette={palette}
        screenId="screen-portrait"
      />

      <MonitorIso
        x={landscape.x}
        y={landscape.y}
        screenW={landscape.w}
        screenH={landscape.h}
        depth={landscape.d}
        palette={palette}
        screenId="screen-landscape"
      />

      <g>
        <path d={face(mouse.right, ORIGIN, SCALE)} fill={palette.mouseSide} />
        <path d={face(mouse.front, ORIGIN, SCALE)} fill={palette.mouse} />
        <path d={face(mouse.top, ORIGIN, SCALE)} fill={palette.mouseTop} />
      </g>

      <g>
        <path d={face(keyboard.right, ORIGIN, SCALE)} fill={palette.keyboardSide} />
        <path d={face(keyboard.front, ORIGIN, SCALE)} fill={palette.keyboard} />
        <path d={face(keyboard.top, ORIGIN, SCALE)} fill={palette.keyboardTop} />
        {keyRows.map((row) =>
          keyCols.map((col) => {
            const key = boxFaces(10.5 + col, 8.8 + row, 0.93, 0.55, 0.42, 0.08)
            return (
              <path
                key={`${row}-${col}`}
                d={face(key.top, ORIGIN, SCALE)}
                fill={palette.bezelTop}
                opacity={0.85}
              />
            )
          }),
        )}
      </g>
      </g>
    </svg>
  )
}

const DeskSetup = () => {
  const { t } = useTranslation()
  const { isDark } = useTheme()
  const { getLocalized } = useLocalizedData()
  const palette = palettes[isDark ? "dark" : "light"]
  const workstation = UsesRepository.getCategoryById("uses-cat-workstation")

  const portraitName =
    workstation?.items.find((item) => item.id === MONITOR_IDS.portrait)?.name
  const landscapeName =
    workstation?.items.find((item) => item.id === MONITOR_IDS.landscape)?.name

  if (!portraitName || !landscapeName) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
    >
      <div className="border-b border-gray-100 px-4 py-3 dark:border-gray-700">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
          {t("uses.deskSetup.title")}
        </h3>
        <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
          {t("uses.deskSetup.description")}
        </p>
      </div>

      <div
        className="relative bg-gradient-to-b from-gray-100/80 via-gray-50/40 to-transparent px-2 py-6 dark:from-gray-900/80 dark:via-gray-900/30 dark:to-transparent sm:px-4 sm:py-8"
        aria-label={t("uses.deskSetup.ariaLabel")}
      >
        <DeskSetupScene palette={palette} />

        <div className="mx-auto mt-2 grid max-w-xl grid-cols-2 gap-3 px-4 sm:gap-6">
          <div className="text-center">
            <p
              className="text-[11px] font-semibold leading-tight sm:text-xs"
              style={{ color: palette.label }}
            >
              {getLocalized(portraitName)}
            </p>
            <p
              className="mt-0.5 text-[10px] uppercase tracking-wider sm:text-[11px]"
              style={{ color: palette.accent }}
            >
              {t("uses.deskSetup.portrait")}
            </p>
          </div>
          <div className="text-center">
            <p
              className="text-[11px] font-semibold leading-tight sm:text-xs"
              style={{ color: palette.label }}
            >
              {getLocalized(landscapeName)}
            </p>
            <p
              className="mt-0.5 text-[10px] uppercase tracking-wider sm:text-[11px]"
              style={{ color: palette.accent }}
            >
              {t("uses.deskSetup.landscape")}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default DeskSetup
