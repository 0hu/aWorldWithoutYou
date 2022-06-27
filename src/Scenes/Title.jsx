import '../scss/styles.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Title() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="title">
        A World Without
        <div className="fade-out-box">You</div>
        <Link to="/firstscene">가즈아</Link>
      </div>
    </motion.div>
  );
}

export default Title;
