"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useSelectedLayoutSegments } from "next/navigation";
import styles from "./AnimateCaseStudy.module.css";
export default function AnimateCaseStudy({
  children,
  caseStudy,
}: {
  children: React.ReactNode;
  caseStudy: React.ReactNode;
}) {
  const caseStudySelected = useSelectedLayoutSegments("caseStudy").slice(1)[0] !== "[...catchAll]";
  return (
    <div className={styles.wrapper}>
      <AnimatePresence>
        {!caseStudySelected && (
          <motion.div
            key="children"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.layer}
          >
            {children}
          </motion.div>
        )}
        {caseStudySelected && (
          <motion.div
            key="caseStudy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.layer}
          >
            {caseStudy}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
