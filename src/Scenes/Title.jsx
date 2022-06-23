import '../scss/styles.css';
import { Link } from 'react-router-dom';

function Title() {
  return (
    <div className="title">
      A World Without
      <div className="fade-out-box">You</div>
      <Link to="/firstscene">가즈아</Link>
    </div>
  );
}

export default Title;
