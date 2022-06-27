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
      <div className="second-scene">
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
          I learnt that ISIS do not represent Muslims and that they do things that Islam forbiddens.
        </div>
        <div>
          Despite our cultural and religious differences, we became close friends.
        </div>
        <div>
          As long as there is respect and understanding, people can co-exist peacefully.
        </div>
        <div>
          Humanity unites us and every person`s existence is meaningful.
        </div>
        <Link to="/thirdscene">가즈아</Link>
      </div>
    </motion.div>
  );
}

export default SecondScene;
