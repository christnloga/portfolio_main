import { motion } from "motion/react";

import type { ReactNode } from "react";

interface RevealElementProps {
  children: ReactNode;
}

const RevealElement = ({ children }: RevealElementProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: "all" }}
      transition={{ ease: "easeInOut", duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default RevealElement;
