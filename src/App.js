import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rockets from './components/Rockets';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Missions from './components/Missions';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/missions" element={<Missions />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
