import '../scss/styles.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function FourthScene() {
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
              I am a Christian and she is a Muslim.
            </div>
            <div>
              She taught me many things about Islam  that helped me understand Muslims.
            </div>
            <div>
              I learnt that ISIS do not represent Muslims and that they do things
              that Islam forbiddens.
            </div>
            <div className="center">
              <Link to="/fifthscene" className="next-page-button">&nbsp;&#8250;&nbsp;</Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default FourthScene;
