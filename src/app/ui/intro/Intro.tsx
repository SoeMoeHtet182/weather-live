import styles from "./style.module.css";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <div className={styles['page-center']}>
      <motion.div
        className={styles['h-container']}
        animate={{
          scale: [1, 1.75, 1.5, 1, 0],
          rotate: [0, 0, 360, -720, 0]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
      >
        <motion.div
          className={styles['h-bar']}
          animate={{
            rotate: [0, 0, -360, 0, 0]
          }}
        ></motion.div>
      </motion.div>
    </div>
  );
}
