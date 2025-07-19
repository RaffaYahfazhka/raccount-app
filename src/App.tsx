
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Index from '@/pages/Index';
import GeneralLedgerPage from '@/pages/GeneralLedger';
import AccountPage from '@/pages/Account';
import AccountDetailPage from '@/pages/AccountDetail';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* English routes */}
          <Route path="/" element={<Index />} />
          <Route path="/en" element={<Index />} />
          <Route path="/en/general-ledger" element={<GeneralLedgerPage />} />
          <Route path="/en/account" element={<AccountPage />} />
          <Route path="/en/account/:id" element={<AccountDetailPage />} />
          
          {/* Indonesian routes */}
          <Route path="/id" element={<Index />} />
          <Route path="/id/general-ledger" element={<GeneralLedgerPage />} />
          <Route path="/id/account" element={<AccountPage />} />
          <Route path="/id/account/:id" element={<AccountDetailPage />} />
          
          {/* Legacy routes without language prefix */}
          <Route path="/general-ledger" element={<GeneralLedgerPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/account/:id" element={<AccountDetailPage />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}
