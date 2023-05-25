function ChildComponent(props) {
    function handleClick() {
      const value = 'example';
      props.onChildClick(value);
    }
  
    return (
      <button onClick={handleClick}>Click me</button>
    );
  }
  
  // 부모 컴포넌트
  function ParentComponent() {
    const [value, setValue] = useState('');
  
    function handleChildClick(valueFromChild) {
      setValue(valueFromChild);
    }
  
    return (
      <div>
        <ChildComponent onChildClick={handleChildClick} />
        <p>Value from child: {value}</p>
      </div>
    );
  }