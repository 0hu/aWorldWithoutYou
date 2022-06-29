import '../scss/styles.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function ThirdScene() {
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
              She has been interested in Korean history and culture for over a decade.
            </div>
            <div>
              I helped her learn Korean and she helped me improve my English.
            </div>
            <div>
              We talked about diverse topics such as religions.
            </div>
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
            <Link to="/fourthscene">가즈아</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ThirdScene;
