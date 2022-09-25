
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AutState from './context/auth/authState';
function App() {
  return (
    <AutState>
        <BrowserRouter>
            <Routes>      
                <Route path="login" element={<Login />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    </AutState>
  );
}

export default App;
