import '../scss/styles.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function FourthScene() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="fourth-scene">
        <div className="line anim-typewriter">
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
        <Link to="/">가즈아</Link>
      </div>
    </motion.div>
  );
}

export default FourthScene;
