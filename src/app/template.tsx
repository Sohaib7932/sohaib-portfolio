"use client";

import { motion } from "motion/react";
import { EASE } from "@/components/motion/tokens";

/**
 * Route transition.
 *
 * Templates remount on every navigation, which gives each page a clean entry
 * animation without any of the exit-tracking that `AnimatePresence` would need
 * around the App Router.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: EASE }}
      className="flex flex-1 flex-col"
    >
      {children}
    </motion.div>
  );
}
