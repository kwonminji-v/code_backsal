import React from 'react'


function Hello({color, name}) {
    return <div style={{color}}>안녕하세요{name}</div>

    {/* <Hello name="react" color="red"></Hello> */}
}   

export default Hello;
/* 
color와 name은 React 컴포넌트 간에 데이터를 전달하는 데 사용되는 속성 -> props(properties)라고 부른다. 
Hello 컴포넌트에 "react"라는 이름과 "red"라는 색상을 명시적으로 전달 / App.js가 상위 컴포넌트이다.
App 컴포넌트 내에서 Hello 컴포넌트를 렌더링 하고 있으며, 이 때, Hello 컴포넌트에 속성을 전달하고 있습니다.
이렇게 다른 컴포넌트를 포함하는 컴포넌트를 상위 컴포넌트라고 합니다.
반대로, 다른 컴포넌트에 포함되어 있는 컴포넌트를 하위 컴포넌트라고 한다.
React에서 컴포넌트 구조는 일반적으로 상위 컴포넌트에서 하위 컴포넌트로 흐른다.
상위 컴포넌트는 하위 컴포넌트를 포함하고, 하위 컴포넌트에서 속성(props)를 전달한다.
이러한 방식을 통해 데이터와 함수를 컴포넌트 간에 전달할 수 있다.*/