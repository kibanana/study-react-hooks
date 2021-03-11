import React, { useRef, useImperativeHandle, forwardRef } from 'react';

function FancyInput(props, ref) {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus();

        setTimeout(() => {
          inputRef.current.blur();
        }, 2000);
      }
    }));
    return <input ref={inputRef} type="text" />;
}
FancyInput = forwardRef(FancyInput);

export default FancyInput;