
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import GeneralLedgerPage from '@/pages/GeneralLedger';
import AccountPage from '@/pages/Account';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<GeneralLedgerPage />} />
          <Route path="/general-ledger" element={<GeneralLedgerPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}
