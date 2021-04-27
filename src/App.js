import logo from './logo.svg';
import './App.css';
import React, { useRef, useEffect, useReducer, useMemo } from 'react';
import { TODO, TODOCOUNT, HOBBY, HOBBYCOUNT, CURRENT_USER } from './action';
import reducer from './reducer';
import { ReducerContext } from './context';
import HookExample from './components/HookExample';
import EffectHook from './components/HookExample/EffectHook';
import CustomHookExample1 from './components/HookExample/CustomHookExample1';
import CustomHookExample2 from './components/HookExample/CustomHookExample2';
import ContextExample from './components/HookExample/ContextExample';
import ContextHook from './components/HookExample/ContextHook';
import ReducerHook from './components/HookExample/TodoReducerHook';
import ReducerHookTodoExample from './components/HookExample/ReducerHookTodoExample';
import ReducerHookUserExample1 from './components/HookExample/ReducerHookUserExample1';
import ReducerHookUserExample2 from './components/HookExample/ReducerHookUserExample2';
import RefHookExample from './components/HookExample/RefHookExample';
import FancyInput from './components/HookExample/FancyInput';
import HocHookExample1 from './components/HookExample/HocHookExample1';
import HocHookExample2 from './components/HookExample/HocHookExample2';
import HocHookExample3 from './components/HookExample/HocHookExample3';
import ReactCompoundSlider from './components/CompoundSliderExample/ReactCompoundSlider';
import ReactGridGallery1 from './components/GridGalleryExample/ReactGridGallery1';
import ReactGridGallery2 from './components/GridGalleryExample/ReactGridGallery2';
import ReactGridGallery3 from './components/GridGalleryExample/ReactGridGallery3'; // error
import ReactGridGallery4 from './components/GridGalleryExample/ReactGridGallery4'; // error
import ReactGridGallery5 from './components/GridGalleryExample/ReactGridGallery5'; // error
import ReactGridGallery6 from './components/GridGalleryExample/ReactGridGallery6'; // error

function App() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  const initialValue = {
    [TODO]: ['A TODO'],
    [TODOCOUNT]: 0,
    [HOBBY]: ['A HOBBY'],
    [HOBBYCOUNT]: 0,
    [CURRENT_USER]: null
  };

  const [state, dispatch] = useReducer(reducer, initialValue);
  const store = useMemo(() => [state, dispatch], [state]); // 1. useMemo
  // const store = [state, dispatch]; // 2.
  // 두 방법 다 가능. useMemo는 성능 향상을 목적으로 사용함.

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
          <ReducerContext.Provider value={store}>
            <ReducerHookUserExample1 />
            <ReducerHookTodoExample />
            <ReducerHookUserExample2 />
          </ReducerContext.Provider>
        </div>
        <div>
          <h1>useRef example</h1>
          <RefHookExample />
          <h1>useImperativeHandle, useRef example</h1>
          <FancyInput ref={inputRef} />
        </div>
        <div>
          <h1>HOC with react hooks example</h1>
          <h3>List</h3>
          <HocHookExample1 />
          <h3>Box List</h3>
          <HocHookExample2 />
          <h3>Ordered List</h3>
          <HocHookExample3 />
        </div>
      </body>
    </div>
  );
}

export default App;
