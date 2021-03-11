import React, { useRef } from 'react';

export default function TextInputWithFocusButton() {
    const inputNameEl = useRef(null);
    const inputAgeEl = useRef(null);

    const onButtonClick = (e) => {
      // `current` points to the mounted text input element
      e.preventDefault()
      inputNameEl.current.focus();
      setTimeout(() => { inputAgeEl.current.focus() }, 2000);
    };
    return (
      <form>
        <label>
          이름: 
          <input ref={inputNameEl} type="text" />
        </label>
        <br />
        <label>
          나이: 
          <input ref={inputAgeEl} type="number" />
        </label>
        <br />
        <button onClick={onButtonClick}>Focus the input</button>
      </form>
    );
}