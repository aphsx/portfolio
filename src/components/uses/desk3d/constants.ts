export const DESK_WIDTH_CM = 170;
export const DESK_DEPTH_CM = 70;

/** Scene units: 1 unit = 1 meter */
export const DESK_W = DESK_WIDTH_CM / 100;
export const DESK_D = DESK_DEPTH_CM / 100;
export const DESK_TOP_Y = 0.74;
export const DESK_TOP_T = 0.035;
/** Top surface of the desk — items sit on this Y */
export const DESK_SURFACE_Y = DESK_TOP_Y + DESK_TOP_T / 2;

export type SceneTheme = {
  desk: string;
  deskLeg: string;
  bezel: string;
  stand: string;
  keyboard: string;
  mouse: string;
  macbook: string;
  macbookScreen: string;
  screenPortrait: string;
  screenLandscape: string;
  floor: string;
  bg: string;
};

export const sceneThemes: Record<"light" | "dark", SceneTheme> = {
  light: {
    desk: "#c9956a",
    deskLeg: "#f4f4f5",
    bezel: "#18181b",
    stand: "#3f3f46",
    keyboard: "#27272a",
    mouse: "#27272a",
    macbook: "#86868b",
    macbookScreen: "#0891b2",
    screenPortrait: "#14b8a6",
    screenLandscape: "#2dd4bf",
    floor: "#e5e7eb",
    bg: "#f9fafb",
  },
  dark: {
    desk: "#3d2e22",
    deskLeg: "#e4e4e7",
    bezel: "#09090b",
    stand: "#27272a",
    keyboard: "#18181b",
    mouse: "#18181b",
    macbook: "#6e6e73",
    macbookScreen: "#0d9488",
    screenPortrait: "#0d9488",
    screenLandscape: "#14b8a6",
    floor: "#1f2937",
    bg: "#111827",
  },
};
