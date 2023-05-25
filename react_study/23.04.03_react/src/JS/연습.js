import React, { useState } from 'react';

function ChildComponent(props) {
    console.log(props)
  return (
    <div>
      <button onClick={props.onClick}>Click me</button>
    </div>
  );
}

function ParentComponent() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  
  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

export default ParentComponent;
