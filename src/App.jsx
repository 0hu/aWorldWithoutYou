import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { Route, Routes } from 'react-router-dom';
import Title from './Scenes/Title';
import FirstScene from './Scenes/FirstScene';
import SecondScene from './Scenes/SecondScene';
import ThirdScene from './Scenes/ThirdScene';
import FourthScene from './Scenes/FourthScene';
import Letter from './Scenes/letter';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/FirstScene" element={<FirstScene />} />
        <Route path="/SecondScene" element={<SecondScene />} />
        <Route path="/ThirdScene" element={<ThirdScene />} />
        <Route path="/FourthScene" element={<FourthScene />} />
        <Route path="/letter" element={<Letter />} />
      </Routes>
    </DndProvider>
  );
}

export default App;
