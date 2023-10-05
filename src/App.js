import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ResponsiveDrawer from './pages/dashboard';

function App() {
  return (
    <>
    <BrowserRouter>
      <ResponsiveDrawer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
