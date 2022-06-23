import '../scss/letter.css';
import { Link } from 'react-router-dom';

function Letter() {
  return (
    <div className="letter">
      <div className="line anim-typewriter">
        무언가 적는곳
      </div>
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
      <Link to="/fourthscene">가즈아</Link>
    </div>
  );
}

export default Letter;
