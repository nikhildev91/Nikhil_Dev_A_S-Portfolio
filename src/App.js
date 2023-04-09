import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import Appv2 from './Appv2';
import Workdetails from './components/Workdetails';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Appv2 />} />
        <Route path="/admin-panel" element={<Dashboard />} />
        <Route path="/admin-panel/login" element={<Login />} />
        <Route path="/work-details/:id" element={<Workdetails />} />
      </Routes>
    </BrowserRouter>
  );
}
