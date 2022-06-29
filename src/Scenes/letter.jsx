import '../scss/letter.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LetterLoader from '../components/LetterLoader';

function Letter() {
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
          <LetterLoader setLoading={setLoading} />
        </motion.div>
      ) : (
        <div className="container">
          <div className="letter">
            <div className="left-letter">
              <div data-aos="fade-left">Hi😊</div>
            </div>
            <div className="left-letter">
              <div data-aos="fade-left">I am still sick as usual</div>
            </div>
            <div className="left-letter">
              <div data-aos="fade-left">but trying to not think about it</div>
            </div>
            <div className="right-letter">
              <div data-aos="fade-right">omg</div>
            </div>
            <div className="right-letter">
              <div data-aos="fade-right">Hiiiiii</div>
            </div>
            <div className="right-letter">
              <div data-aos="fade-right">Aigoooooooo</div>
            </div>
            <div className="left-letter">
              <div data-aos="fade-left">How are you?</div>
            </div>
            <div className="right-letter">
              <div data-aos="fade-right">Yeah I am good as usual</div>
            </div>
            <div className="left-letter">
              <div data-aos="fade-left">Good😊</div>
            </div>
            <div className="left-letter">
              <div data-aos="fade-left">I am happy to talk you again</div>
            </div>
            <div className="right-letter">
              <div data-aos="fade-right">haha same</div>
            </div>
            <Link to="/seventhscene">가즈아</Link>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Letter;
