import logo from './logo.svg';
import './App.css';
import ReactCompoundSlider from './components/ReactCompoundSlider'
// import ReactGridGallery1 from './components/ReactGridGallery1'
import ReactGridGallery2 from './components/ReactGridGallery2'

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <body style={{ margin: '100px 50px' }}>
        <div>
          <ReactCompoundSlider />
        </div>
        <div>
          <ReactGridGallery2 />
        </div>
      </body>
    </div>
  );
}

export default App;
