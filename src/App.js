import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
function App() {
  return (
    <div>
    <Routes>
      <Route id = 'homePage' path="/" element={<HomePage/>} />
    </Routes>
    </div>
  );
}
export default App;

