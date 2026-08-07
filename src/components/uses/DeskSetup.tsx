"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../contexts/theme/ThemeProvider";
import { useLocalizedData } from "../../hooks";
import { UsesRepository } from "../../data";
import { DESK_DEPTH_CM, DESK_WIDTH_CM } from "./desk3d/constants";

const MONITOR_IDS = {
  portrait: "uses-monitor-acer",
  landscape: "uses-monitor-lenovo-27q10",
} as const;

const DeskSetup3D = dynamic(() => import("./DeskSetup3D"), {
  ssr: false,
  loading: () => (
    <div className="mx-auto flex h-[280px] w-full max-w-2xl items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-900 sm:h-[320px]">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-teal-500 border-t-transparent" />
        <span className="text-xs text-gray-500 dark:text-gray-400">Loading 3D…</span>
      </div>
    </div>
  ),
});

const DeskSetup = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const { getLocalized } = useLocalizedData();
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
        <p className="mb-3 text-center text-[10px] font-medium tracking-wider text-gray-400 uppercase dark:text-gray-500">
          {t("uses.deskSetup.dragHint")}
        </p>

        <DeskSetup3D isDark={isDark} />

        <div className="mx-auto mt-4 grid max-w-xl grid-cols-2 gap-3 px-2 sm:gap-5">
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
export { DESK_WIDTH_CM, DESK_DEPTH_CM };
