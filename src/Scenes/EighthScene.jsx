import '../scss/styles.scss';
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
          </div>
          <div className="center">
            <Link to="/" className="next-page-button">&nbsp;&#8250;&nbsp;</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default EighthScene;
