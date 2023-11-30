// AnimatedCloud.js
import { motion } from 'framer-motion';
import styles from './colud.module.css';

const Cloud = () => {
  return (
    <motion.div
      initial={{ x: '-450%' }}
      animate={{ x: '700%' }}
      transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      className={styles.cloud}
    />
  );
};

export default Cloud;
