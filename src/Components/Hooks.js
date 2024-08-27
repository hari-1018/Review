import React,{useRef,useEffect}  from 'react'

function Hooks() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);
    
  return (
    <div>
        <h3>useRef Hook</h3>
        <input ref={inputRef} type='text' placeholder='Enter your name' />
        <hr></hr>
    </div>
  )
}

export default Hooks;