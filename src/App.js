import logo from './logo.svg';
import './App.css';
import React, { useRef, useEffect } from 'react';
import HookExample from './components/HookExample';
import EffectHook from './components/HookExample/EffectHook';
import CustomHookExample1 from './components/HookExample/CustomHookExample1';
import CustomHookExample2 from './components/HookExample/CustomHookExample2';
import ContextExample from './components/HookExample/ContextExample';
import ContextHook from './components/HookExample/ContextHook';
import ReducerHook from './components/HookExample/TodoReducerHook';
import ReducerHookExample from './components/HookExample/ReducerHookExample';
import RefHookExample from './components/HookExample/RefHookExample';
import FancyInput from './components/HookExample/FancyInput';
import ReactCompoundSlider from './components/ReactCompoundSlider';
import ReactGridGallery1 from './components/ReactGridGallery1';
import ReactGridGallery2 from './components/ReactGridGallery2';
import ReactGridGallery3 from './components/ReactGridGallery3'; // error
import ReactGridGallery4 from './components/ReactGridGallery4'; // error
import ReactGridGallery5 from './components/ReactGridGallery5'; // error
import ReactGridGallery6 from './components/ReactGridGallery6'; // error

function App() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div className="App">
      <header>
      </header>
      <body style={{ margin: '100px 50px' }}>
        <h1>React Compound Slider</h1>
        <div>
          <ReactCompoundSlider />
        </div>

        <h1>React Grid Gallery</h1>

        <div>
          <ReactGridGallery2 />
        </div>

        <div>
          <h1>useState, useEffect hooks example</h1>
          <HookExample />
          <EffectHook />
        </div>
        <div>
          <h1>custom hook examples</h1>
          <CustomHookExample1 />
          <CustomHookExample2 />
        </div>
        <div>
          <h1>context, useContext examples</h1>
          <ContextExample />
          <hr />
          <ContextHook />
        </div>
        <div>
          <h1>useReducer(specific / general) example</h1>
          <ReducerHook />
          <hr />
          <ReducerHookExample />
        </div>
        <div>
          <h1>useRef example</h1>
          <RefHookExample />
          <hr />
          <FancyInput ref={inputRef} />
        </div>
      </body>
    </div>
  );
}

export default App;
