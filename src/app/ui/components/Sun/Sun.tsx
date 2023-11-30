import styles from './sun.module.css';
import { motion } from 'framer-motion';

const Sun = () => {
  return (
    <motion.div 
      initial={{ x: '-200%', y: '100%' }}
      animate={{ x: 0 , y: 0 }}
      transition={{ duration: 5, ease: 'linear' }}
      className={styles.sun}/>
  );
};

export default Sun;