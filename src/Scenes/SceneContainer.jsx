import '../scss/styles.css';
import Title from './Title';
import FirstScene from './FirstScene';
import SecondScene from './SecondScene';
import ThirdScene from './ThirdScene';
import Letter from './letter';
import FourthScene from './FourthScene';

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
      <div className="letter-container">
        <div className="letter">
          <Letter />
        </div>
      </div>
      <div className="container">
        <div className="scene-box">
          <FourthScene />
        </div>
      </div>
    </>
  );
}

export default SceneContainer;
