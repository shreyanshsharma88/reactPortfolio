import './App.css';
import { Nav } from './components/nav';
import { Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom';
import { IntroSection } from './components/introSection';
import { PreviousWorks } from './components/previousWork';
import { MySkillSet } from './components/skillSet';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { ContactMe } from './components/contactMe';

function App() {
  return (
    <div className="App">

      <Nav />
      
        <Routes>
          <Route path="/" element={<IntroSection ArrowForwardIosIcon={ArrowForwardIosIcon}/>} />
          <Route path="/previousWork" element={<PreviousWorks ArrowForwardIosIcon={ArrowForwardIosIcon}/>} />
          <Route path="/intro" element={<IntroSection ArrowForwardIosIcon={ArrowForwardIosIcon}/>} />
          <Route path="/skills" element={< MySkillSet ArrowForwardIosIcon={ArrowForwardIosIcon}/>} />
          <Route path="/contactMe" element={< ContactMe ArrowForwardIosIcon={ArrowForwardIosIcon}/>} />

        </Routes>
      
    </div>
  );
}

export default App;
