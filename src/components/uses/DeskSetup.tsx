"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../contexts/theme/ThemeProvider";
import { useLocalizedData } from "../../hooks";
import { UsesRepository } from "../../data";
import { DESK_DEPTH_CM, DESK_WIDTH_CM } from "./desk3d/constants";
import type { DeskObjectLabels } from "./desk3d/selection";

const ITEM_IDS = {
  portrait: "uses-monitor-acer",
  landscape: "uses-monitor-lenovo-27q10",
  keyboard: "uses-keyboard-aula",
  mouse: "uses-mouse-atk-air9",
  macbook: "uses-macbook",
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

  const labels = useMemo<DeskObjectLabels>(() => {
    const name = (id: string) => {
      const item = workstation?.items.find((entry) => entry.id === id);
      return item ? getLocalized(item.name) : "";
    };

    return {
      desk: t("uses.deskSetup.deskLabel", { width: DESK_WIDTH_CM, depth: DESK_DEPTH_CM }),
      "monitor-portrait": name(ITEM_IDS.portrait),
      "monitor-main": name(ITEM_IDS.landscape),
      keyboard: name(ITEM_IDS.keyboard),
      mouse: name(ITEM_IDS.mouse),
      macbook: name(ITEM_IDS.macbook),
    };
  }, [t, getLocalized, workstation]);

  if (!labels["monitor-portrait"] || !labels["monitor-main"]) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
      aria-label={t("uses.deskSetup.ariaLabel")}
    >
      <DeskSetup3D isDark={isDark} labels={labels} />
    </motion.div>
  );
};

export default DeskSetup;
export { DESK_WIDTH_CM, DESK_DEPTH_CM };
