import './App.css';
import { useState } from 'react';
import StartGame from './components/startgame';
import Originalgame from './components/originalgame';

function App() {
  const [action, setAction] = useState(true);

  const toggle = () => {
    setAction(false);
  };

  return (
    <div>
      {action ? (
        <StartGame toggle={toggle} />
      ) : (
        <Originalgame />
      )}
    </div>
  );
}

export default App;
