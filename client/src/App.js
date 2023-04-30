import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/auth/login' element={<LoginPage />} />
      <Route path='/auth/register' element={<RegisterPage />} /> */}
    </Routes>
  );
}

export default App;
