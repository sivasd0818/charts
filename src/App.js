import './App.css';
import VerticalBar from './components/VerticalBar';
import Line from './components/Line';
import Pie from './components/Pie';
import Scatter from './components/Scatter';


function App() {
  return (
    <div className="container">
      <div className="grid">
        <VerticalBar />
        <Line />
        <Pie />
        <Scatter />
      </div>
    </div>
  );
}

export default App;
