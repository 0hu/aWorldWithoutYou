import '../scss/styles.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function SecondScene() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      {' '}
      <div className="container">
        <div className="scene-box">
          <div className="second-scene">
            <div>
              In August of that summer, I met a Tunisian girl.
            </div>
            <div>
              We exchanged our cultures and we became good friends.
            </div>
            <div>
              This shows that the distance does not present an obstacle
              to establish a genuine friendship.
            </div>
            <Link to="/thirdscene">가즈아</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SecondScene;
