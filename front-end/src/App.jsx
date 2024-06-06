import { Route, Routes } from 'react-router-dom';
import './App.css'
import Template from './components/Template/Template'
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<HomePage />} />
        <Route path="/log-in" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Route>
    </Routes>
  )
}

export default App
