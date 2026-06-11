import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { ThankYou } from './pages/ThankYou';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/obrigado" element={<ThankYou />} />
        {/* Support hash routing or direct path fallbacks just in case */}
        <Route path="/#obrigado" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

