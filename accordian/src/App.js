import './App.css';
import data from "./data"
import Accordian from './components/Accordian/accodian';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the App</h1>
        <p>Hello</p>
        {data.map((item) => (
          <Accordian key={item.id} id={item.id} title={item.title} content={item.content} />
        ))}
      </header>
    </div>
  );
}

export default App;