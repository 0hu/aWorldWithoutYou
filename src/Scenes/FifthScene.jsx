import '../scss/styles.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function FifthScene() {
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
              Despite our cultural and religious differences, we became close friends.
            </div>
            <div>
              As long as there is respect and understanding, people can co-exist peacefully.
            </div>
            <div>
              Humanity unites us and every person`s existence is meaningful.
            </div>
            <div>
              We talked daily for a couple of months.
            </div>
            <Link to="/sixthscene">가즈아</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default FifthScene;
