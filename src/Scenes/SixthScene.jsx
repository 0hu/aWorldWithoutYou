import '../scss/styles.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function SixthScene() {
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
              In late 2020, her health deteriorated and we lost touch.
            </div>
            <div>
              I really felt sad and anxious and I prayed that she is fine.
            </div>
            <div>
              Time passed and I hoped that we would talk again.
            </div>
            <div>
              One day, she sent me a message and she told me about what happened in her life.
            </div>
            <img className="walk-alone" src="https://24.media.tumblr.com/9a88cc2b7e9262bcaa1969c4cce869f8/tumblr_n69xa9z5x61skdwxio1_500.gif" alt="쓸쓸히걸어가는모습" />
            <div className="center">
              <Link to="/letter" className="next-page-button">&nbsp;&#8250;&nbsp;</Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SixthScene;
