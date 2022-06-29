import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Title from './Scenes/Title';
import FirstScene from './Scenes/FirstScene';
import SecondScene from './Scenes/SecondScene';
import ThirdScene from './Scenes/ThirdScene';
import FourthScene from './Scenes/FourthScene';
import Letter from './Scenes/letter';
import FifthScene from './Scenes/FifthScene';
import SixthScene from './Scenes/SixthScene';
import SeventhScene from './Scenes/SeventhScene';
import EighthScene from './Scenes/EighthScene';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" element={<Title />} />
          <Route path="/firstscene" element={<FirstScene />} />
          <Route path="/secondscene" element={<SecondScene />} />
          <Route path="/thirdscene" element={<ThirdScene />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/fourthscene" element={<FourthScene />} />
          <Route path="/fifthscene" element={<FifthScene />} />
          <Route path="/sixthscene" element={<SixthScene />} />
          <Route path="/seventhscene" element={<SeventhScene />} />
          <Route path="/eighthscene" element={<EighthScene />} />
        </Routes>
      </AnimatePresence>
    </DndProvider>
  );
}

export default App;
