import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import SceneContainer from './Scenes/SceneContainer';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <SceneContainer />
    </DndProvider>
  );
}

export default App;
