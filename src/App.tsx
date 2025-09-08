import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import { QuickGame } from './pages/QuickGame';
import { CipherGame } from './games/CipherGame';
import SignupPage from './pages/SignupPage';
import Leaderboard from './pages/LeaderBoard';
import RetroAuthGate from './pages/RetroAuthGate';

function App() {
  return (
    <Router>
          <Navbar />
        <Routes>
          <Route path="/" element={<RetroAuthGate />} />
          <Route path="/home" element={<Home />} />
          <Route path="/games" element={<QuickGame />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/games/cipher" element={<CipherGame />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
     
    </Router>
  );
}

export default App;