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
    <div className="flex h-[280px] w-full items-center justify-center sm:h-[320px]">
      <div className="h-7 w-7 animate-spin rounded-full border-2 border-teal-500 border-t-transparent" />
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

  const monitors = [
    { name: getLocalized(portraitName), tag: t("uses.deskSetup.portrait") },
    { name: getLocalized(landscapeName), tag: t("uses.deskSetup.landscape") },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
      aria-label={t("uses.deskSetup.ariaLabel")}
    >
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {t("uses.deskSetup.description", {
            width: DESK_WIDTH_CM,
            depth: DESK_DEPTH_CM,
          })}
        </p>
        <span className="text-[10px] tracking-wide text-gray-400 uppercase dark:text-gray-500">
          {t("uses.deskSetup.dragHint")}
        </span>
      </div>

      <DeskSetup3D isDark={isDark} />

      <div className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-1">
        {monitors.map((item) => (
          <p key={item.tag} className="text-[11px] text-gray-600 dark:text-gray-300 sm:text-xs">
            <span className="font-medium text-teal-600 dark:text-teal-400">{item.tag}</span>
            <span className="mx-1.5 text-gray-300 dark:text-gray-600">·</span>
            {item.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default DeskSetup;
export { DESK_WIDTH_CM, DESK_DEPTH_CM };
