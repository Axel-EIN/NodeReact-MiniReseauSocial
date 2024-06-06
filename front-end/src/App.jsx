import { Route, Routes } from 'react-router-dom';
import './App.css'
import Template from './components/Template/Template'
import HomePage from './pages/HomePage/HomePage';

function App() {
 
  return (
    <Routes>
   
      <Route path="/" element={<Template />}>
        <Route index element={<HomePage />} />
        {/* <Route path="/log-in" element={<LoginPage />} /> */}
      </Route>
      </Routes>
  )
}

export default App
