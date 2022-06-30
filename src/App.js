import './App.css';
import Show from './components/Show';
import Profile from './components/Profile';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <div className='flex flex-col justify-center'>
        <Show />
        <Show />
        <Show />
      </div>
      
    </div>
  );
}

export default App;
