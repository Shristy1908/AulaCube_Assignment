import './App.css';
import LeftSidebar from './Components/LeftSidebar/LeftSidebar';
import RightSidebar from './Components/RightSidebar/RightSidebar';
import { useState } from 'react';

function App() {

  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="container">
       <div className='left'>
           <LeftSidebar setSelectedCard={setSelectedCard}/>
       </div>
       <div className='right'>
          <RightSidebar selectedCard={selectedCard}/>
       </div>
    </div>
  );
}

export default App;
