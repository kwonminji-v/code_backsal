/* 리액트는 속성을 prop이라 함
사용자 정의 태그는 컴포넌트라고 한다! */

/* 
이벤트 값을 가진 컴포넌트 만들기. */
import React from 'react'
import '../App.css';

function Article(props) {
    console.log(props.title, props.body)
    return (
        <article>
            <h2>{props.title}</h2>
            {props.body}
        </article>
    )
}


function Header(props) {
    console.log('props', props, props.title);
/* props > object(객체)가 들어오는데 객체에는 title이 REACT라는 게 담겨있다.*/
    return (
        <header>
            <h1><a href="/" onClick={(event) => {
                event.preventDefault(); 
                props.onChangeMode();
            }}>{props.title}</a></h1>
        </header>

/* 
event에 preventDefault를 작성하게 된다면, 이 a태그가 동작하면 기본 동작을 방지하여 준다. (ex) 클릭해도 리로드가 발생하지 않는다.속성으로 입력된 onChangeMode 함수를 a태그 onClick 이벤트에 적용해준다면, 헤더의 글씨인 WEB을 클릭하면 알럿창이 뜨게 된다.

리턴값에 들어가는 구문에다가 {props.title} 중괄호 사이에 있는 내용은 표현식으로 취급되기 때문에 해석되어 REACT로 반영됨 / 상단에 작성된 a태그는 순수한 html과 같지 않고 유사 html이다.
a태그에 이벤트를 걸게 되면, 리액트 개발환경이 최종적으로 브라우저가 이해할 수 있는 html로 컨버팅 해주는 것. 그래서 onClick 후 = 다음 function을 입력해주어야 한다. 
a태그를 클릭했을 때, 내부에 작성된 함수가 실행되는 것 
*/
    )
}

function Nav(props) {
    const lis =[];
    for(let i=0; i<props.topics.length; i++) {
        let item = props.topics[i];
        lis.push( <li key={item.id} >
        <a id={item.id} href={'/read/1' + item.id} 
        onClick={event=>{ event.preventDefault(); props.onChangeMode(event.target.id); }}>{item.title}</a></li>)}
/* 
a태그는 링크가 클릭될 수 있게 해주는 기능이 있는데, 그 기능과 알럿창을 띄우기 위한 기능이 중복될 수 있기 때문에, 
우선 기본적으로 가지고 있는 이벤트를 막아주기 위해 event.preventDefault를 먼저 실행하고 그 이후에 알럿창이 뜨는 컴포넌트 함수를 불러와야 한다.
id = {item.id} : 불러오고 싶은 값이 속성의 id 값이 필요하기 때문에 id 값을 얻어내는 방법은 a태그에 id값을 부여해주면 된다. 
event target : a태그가 가지고 있는 id속성을 얻어내려면 event 객체를 사용하고, event 객체가 갖고 있는 target을 이용 / target은 그 이벤트를 유발시킨 태그 그 태그는 a태그이며, 
a 태그의 id 값을 event.target.id로 뒤에 입력해준다면 클릭 이벤트 시 id 값이 불러와진다.

a태그를 동적으로 만든 후 링크로 만들려면 a태그로 감싼 후, 링크 위치도 동적으로 바뀌기 위해 /read/ id를 찍어보았다. */
    return (
        <nav>
            <ol>
            {lis}
            </ol>
        </nav>
    )
/* 상단에 배열을 변수에 담아 선언해주면, 리턴 값엔 선언된 컴포넌트를 중괄호로 작성해준다면 상단의 li 항목들이랑 똑같이 보여짐 
props에 topics로 전달된 값을 받아서 동적으로 변환해 배열으로 담아주면 좋다.  */
}

export default function App() {
    const topics = [
    {id:1, title:'html', body: 'html is...'},        
    {id:2, title:'CSS', body: 'CSS is...'},        
    {id:3, title:'Javascript', body: 'Javascript is ...'}        
    ];
        return (
        <div>
            <Header title="WEB" onChangeMode={() => {alert('WEB');}}></Header>
            <Nav topics={topics} onChangeMode={(id) => {alert(id);
            }}></Nav>
            <Article title="Welcome" body="Hello,WEB"></Article>
        </div>
/* 헤더 속성에 타이틀 값을 주면 타이틀에 입력된 속성값이 상단에 선언된 헤더의 값이 변경되었으면 좋음 */
)
}
/* 본인이 설정한 컴포넌트(사용자 정의태그)에 이벤트기능을 부여해서 컴포넌트 사용자가 헤더를 클릭했을 때, 해야될 작업을 정의할 수 있도록 작성해보았다.  */