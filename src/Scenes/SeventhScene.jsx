import '../scss/styles.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function SeventhScene() {
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
              She was still sick
            </div>
            <div>
              But I was so happy to talk again after a long time.
            </div>
            <div>
              Fortunately, she got better and we met.
            </div>
            <div>
              When I was not able to reach her, I imagined a world without her.
            </div>
            <div>
              It was not the same as before.
            </div>
            <div>
              We need to treasure people as long as they are with us
            </div>
            <div>
              and show them that their existence is precious.
            </div>
            <div className="center">
              <Link to="/eighthscene" className="next-page-button">&nbsp;&#8250;&nbsp;</Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SeventhScene;
