
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

import ConectionSockect  from './services/sockect'

ConectionSockect();
function App() {
  return (
    <BrowserRouter>
            <Routes>
                
                <Route path="login" element={<Login />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="register" element={<Register />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
