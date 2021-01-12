import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {

  const [text,setText] = useState('');
  const [isError, setIsError] = useState(false);

  return (
    <>

    <h1> {text || 'john doe'} </h1>
    <button className='btn' onClick={
      () => setIsError(!isError)}>Toggle error
    </button>

    {isError && <h1> Error! </h1>}
    {isError ? <p> some kind of text...</p> : <div> <h1>teri veri </h1></div>}
    
    </>
  );
};

export default ShortCircuit;
