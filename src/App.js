import logo from './logo.svg';
import './App.css';
import ReactCompoundSlider from './components/ReactCompoundSlider';
// import ReactGridGallery1 from './components/ReactGridGallery1';
// import ReactGridGallery2 from './components/ReactGridGallery2';
// import ReactGridGallery3 from './components/ReactGridGallery3'; // error
// import ReactGridGallery4 from './components/ReactGridGallery4'; // error
// import ReactGridGallery5 from './components/ReactGridGallery5'; // error
// import ReactGridGallery6 from './components/ReactGridGallery6'; // error

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
          <ReactGridGallery6 />
        </div>
      </body>
    </div>
  );
}

export default App;
