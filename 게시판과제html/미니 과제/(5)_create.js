/* 리액트는 속성을 prop이라 함
사용자 정의 태그는 컴포넌트라고 한다! */

/* 
컴포넌트 함수를 다시 실행시켜주는 것이 Prop과 State!
작성해볼 기능은 MODE의 값을 이벤트가 발생했을 때, 변경해주는 걸 작성
*/
import React from 'react'
import '../App.css';
import {useState} from 'react';

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
    return (
        <header>
            <h1><a href="/" onClick={(event) => {
                event.preventDefault(); 
                props.onChangeMode();
            }}>{props.title}</a></h1>
        </header>
    )
}

function Nav(props) {
    const lis =[];
    for(let i=0; i<props.topics.length; i++) {
        let item = props.topics[i];
        lis.push(
        <li key={item.id}>
        <a id={item.id} href={'/read/1' + item.id} onClick={event=>{
            event.preventDefault();
            props.onChangeMode(Number(event.target.id));
        }}>{item.title}</a></li>)
    console.log('props', props, props.title);
    }

    return (
        <nav>
            <ol>
            {lis}
            </ol>
        </nav>
    )
}
/* create의 별도의 컴포넌트를 생성한다.
어떤 정보를 서버로 전송할 때 쓰는 html 태그는 form 태그를 사용한다.
form 태그 안에 입력이 가능한 태그들을 입력한다. */
function Create(props) {
    return <article>
        <h2>Creat</h2>
        <form onSubmit={(event) => {
            event.preventDefault();
            const title = event.target.title.value;
            const body = event.target.body.value;
            props.onCreate(title, body);}}>
            <p><input type="text" name="title" placeholder='title'/></p>
            <p><textarea name="body" placeholder='body'></textarea></p>
            <p><input type="submit" value="Create"/></p>
        </form>
    </article>
}

export default function App() {
    const [mode, setMode] = useState('WELCOME');
    //상단의 3문장을 위의 한 문장으로 축약해서 사용!

    const [id, setId] = useState(null);
    const [nextId, setNextId] = useState(4);

    const [topics, setTopics] = useState([
    {id:1, title:'html', body: 'html is...'},        
    {id:2, title:'CSS', body: 'CSS is...'},        
    {id:3, title:'Javascript', body: 'Javascript is ...'}        
    ]);
    console.log(topics)

    let content = null;
    if ( mode === 'WELCOME') {
        content = <Article title="Welcome" body="Hello,WEB"></Article>
        
    }else if ( mode === 'READ') {
        let title, body = null;
        for(let i=0; i<topics.length; i++){
            console.log(topics[i].id, id);
            if(topics[i].id === id){
                title = topics[i].title;
                body = topics[i].body;
            }
        }
        content = <Article title={title} body={body}></Article>

    } else if ( mode === 'CREATE' ) {
        content = <Create onCreate={(_title, _body) => {
            const newTopic = {id:nextId, title:_title, body:_body}
            const newTopics = [...topics]
            newTopics.push(newTopic);
            setTopics(newTopics);
            setMode('READ');
            setId(nextId);
            setNextId(nextId+1);
        } }></Create>
    }

    return (
        <div>
            <Header title="WEB" onChangeMode={() => {setMode('WELCOME');}}></Header>
            <Nav topics={topics} onChangeMode={(_id) => 
            {setMode('READ'); setId(_id);}}></Nav>

            {content}
            
            <a href="/create" onClick={(event) => {
            event.preventDefault();
            setMode('CREATE');
            }}>Creat</a>
        </div>
)}


/* 
상태를 만들 때 상태의 데이터가 원시데이터 타입(PRIMITIVE)일 땐 (String,number,bigint,boolean,undefined,symbol,null)

ex) const [value, setValue] = useState(PRIMITIVE);

상태의 데이터가 범 객체라면 ex) const [value, setValue] = useState(Object); (object, array)
처리 방법이 달라진다. 데이터를 복제해야 한다.
newValue = {...value} -> value가 객체라면 중괄호에 ...개를 찍고 value 라고 적는다면 오리지널 데이터는 그대로이고 복제본을 새로운 변수를 저장한 후 값을 변경해준다.
newValue 변경 -> setValue(newValue) -> 이 때, 다시 컴포넌트가 실행

배열이라면 newValue = [...value] -> newValue변경 -> setValue(newValue) 복제본데이터가 변경된 것이고 그 때 다시 컴포넌트가 실행된다.
*/

/* 
const [value, setValue] = useState([1]);
    배열로 만들어진 객체를 코딩해본다
    value.push(2); -> 오리지널 데이터를 변경한 것 
    setValue(value); -> 오리지널 데이터를 변경한 것

    반면에 
    const [value, setValue] = useState(1); -> 원시 데이터 타입으로 설정
    setValue(2); -> 오리지널 데이터와 setValue에 설정된 값은 새로운 값이므로, 둘은 다른 데이터이기 때문에 컴포넌트가 다시 렌더링이 된다.

배열을 복사하여 사용하는 경우
    const newTopics = [...topics]
    여기서 const newTopics = [...topics] 코드는 기존 배열 topics를 복사하여 새로운 배열 newTopics를 만드는 것입니다. 이를 하는 이유는 React에서 상태(state)를 업데이트 할 때 기존 상태(state)를 직접 수정하면 문제가 발생하기 때문입니다.

    React에서는 상태(state)를 변경할 때, 기존 상태(state)를 직접 수정하는 것이 아니라 새로운 상태(state)를 만들어서 업데이트합니다. 이를 "불변성(immutability)"이라고 합니다. 이 방법을 사용하면 React에서 상태(state) 업데이트를 관리하기 쉬워지며, 컴포넌트 성능을 최적화할 수 있습니다.

    따라서, const newTopics = [...topics]는 topics 배열을 복사하여 새로운 배열 newTopics를 만들어 상태(state)를 업데이트할 때 기존 배열을 직접 수정하지 않고 새로운 배열에 새로운 값을 추가하는 방법을 사용하고 있습니다. 이를 통해 React에서 상태(state)를 관리하고 불변성을 유지할 수 있습니다.
*/