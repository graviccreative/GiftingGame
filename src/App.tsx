import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import GiftPage from './pages/GiftPage';
import ResetPage from './pages/ResetPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gift/:id" element={<GiftPage />} />
        <Route path="/reset" element={<ResetPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
