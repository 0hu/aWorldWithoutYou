import '../scss/styles.css';
import Title from './Title';
import FirstScene from './FirstScene';
import SecondScene from './SecondScene';
import ThirdScene from './ThirdScene';
import FourthScene from './FourthScene';
import Footer from './Footer';

function SceneContainer() {
  return (
    <>
      <Title />
      <div className="container">
        <div className="scene-box">
          <FirstScene />
        </div>
      </div>
      <div className="container">
        <div className="scene-box">
          <SecondScene />
        </div>
      </div>
      <div className="container">
        <div className="scene-box">
          <ThirdScene />
        </div>
      </div>
      <div className="container">
        <div className="scene-box">
          <FourthScene />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SceneContainer;
