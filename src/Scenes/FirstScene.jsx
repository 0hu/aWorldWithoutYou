import '../scss/loaderMain.css';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';

function FirstScene() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    loading
      ? document.querySelector('body').classList.add('loading')
      : document.querySelector('body').classList.remove('loading');
  }, [loading]);

  return (
    <AnimatePresence>
      { loading ? (
        <motion.div key="loader">
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="first-scene">
            <div>
              In the
              {' '}
              <span className="summer">summer</span>
              {' '}
              of 2020, I joined a
              {' '}
              <span className="language">Korean-English</span>
              {' '}
              server on discord
            </div>
            <div>
              in order to hone my English skills and help foreigners learn Korean.
            </div>
            <div>
              I talked with  foreigners from various countries and I discovered new cultures.
            </div>
            <div className="gif-container">
              <img className="gif" src="https://media4.giphy.com/media/bpYvfwhuCnuiadr2Oy/giphy.gif" alt="언어연습" />
            </div>
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
            <Link to="/secondscene">가즈아</Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default FirstScene;
