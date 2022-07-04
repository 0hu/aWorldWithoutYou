import '../scss/styles.scss';
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
        <div>
          A World Without
          <div className="fade-out-box">You</div>
        </div>
        <Link to="/firstscene" className="next-page-button">&nbsp;&#8250;&nbsp;</Link>
      </div>
    </motion.div>
  );
}

export default Title;
