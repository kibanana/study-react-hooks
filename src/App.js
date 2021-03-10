import logo from './logo.svg';
import './App.css';
import HookExample from './components/HookExample';
import EffectHook from './components/HookExample/EffectHook'
import CustomHookExample1 from './components/HookExample/CustomHookExample1';
import CustomHookExample2 from './components/HookExample/CustomHookExample2';
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
          <EffectHook />
        </div>
        <div>
          <CustomHookExample1 />
          <CustomHookExample2 />
        </div>
      </body>
    </div>
  );
}

export default App;
