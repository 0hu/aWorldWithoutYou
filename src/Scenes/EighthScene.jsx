import '../scss/styles.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function EighthScene() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="container">
        <div className="scene-box">
          <div className="third-scene">
            <div>
              소중한 사람이 있다면 통화나 메시지를 한 번 보내보세요.
            </div>
            <Link to="/">가즈아</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default EighthScene;
