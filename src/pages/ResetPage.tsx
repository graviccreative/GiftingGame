import { useEffect, useState } from 'react';
import { gifts } from '../config/gifts';

export default function ResetPage() {
  const [cleared, setCleared] = useState(false);

  useEffect(() => {
    Object.keys(gifts).forEach((id) => {
      localStorage.removeItem(`gift-${id}`);
    });
    localStorage.removeItem('gift-gambled');
    localStorage.removeItem('gift-thrown-id');
    localStorage.removeItem('gift-post-gamble-id');
    setCleared(true);
  }, []);

  return (
    <div className="page-center">
      <h1>{cleared ? 'Reset!' : 'Resetting...'}</h1>
      <p>All gift states have been cleared. You can scan the QR codes again.</p>
    </div>
  );
}
