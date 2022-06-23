import '../scss/styles.css';
import { Link } from 'react-router-dom';

function Title() {
  return (
    <>
      <div className="title">
        A World Without
        <div className="fade-out-box">You</div>
      </div>
      <Link to="FirstScene">가즈아</Link>
    </>
  );
}

export default Title;
