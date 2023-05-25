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

function Update(props) {
    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);
    return <article>
    <h2>Update</h2>
    <form onSubmit={(event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onUpdate(title, body);}}>
        <p><input type="text" name="title" placeholder='title' value={title} onChange={event => {
            console.log(event.target.value);
            setTitle(event.target.value);
        }}/></p>

        <p><textarea name="body" placeholder='body' value={body} onChange={event=>{
            setBody(event.target.value);
        }}></textarea></p>
        <p><input type="submit" value="Update"/></p>
    </form>
</article>
}
/* 리액트에서는 값을 입력할 때마다 onchange가 호출된다. props들어온 title을 state로 환승하였고, 그 state를 value값을 주었고, state는 컴포넌트안에서 변경이 가능하여 onchange에서 */


export default function App() {
    const [mode, setMode] = useState('WELCOME');
    const [id, setId] = useState(null);
    const [nextId, setNextId] = useState(4);
    const [topics, setTopics] = useState([
    {id:1, title:'html', body: 'html is...'},        
    {id:2, title:'CSS', body: 'CSS is...'},        
    {id:3, title:'Javascript', body: 'Javascript is ...'}        
    ]);
    console.log(topics)

    let content = null;
    let contextControl = null;
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
        contextControl = <>
        <li><a href={"/update/"+id} onClick={(event) => {
            event.preventDefault();
            setMode('UPDATE');
        } }>Update</a></li>
        <li><input type="button" value="Delete" onClick={()=> {
           const newTopics = []
           for(let i = 0; i<topics.length; i++) {
            if(topics[i].id !== id) {
                newTopics.push(topics[i]);
            }
           } 
           setTopics(newTopics);
           setMode('WELCOME');
        }}/></li></>

/* 리액트를 다룰 때는 하나의 태그 안에 들어 있어야 태그를 다룰 수 있어서 제목이 없는 태그를 쓰면 <> 복수의 태그를 그룹핑하는 태그로 사용이 가능 */
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



    } else if (mode === 'UPDATE') {
        let title, body = null;
        for(let i=0; i<topics.length; i++){
            console.log(topics[i].id, id);
            if(topics[i].id === id){
                title = topics[i].title;
                body = topics[i].body;
            }
        }
        content = <Update title={title} body={body} onUpdate={(title, body) => {
            const newTopics=[...topics]
            const updatedTopic = {id:id, title:title, body:body}
            for(let i = 0; i<newTopics.length; i++) {
                if(newTopics[i].id === id) {
                    newTopics[i] = updatedTopic;
                    break;
                }
            }
            setTopics(newTopics);
            setMode('READ');
        }}></Update>
    }

    return (
        <div>
            <Header title="WEB" onChangeMode={() => {setMode('WELCOME');}}></Header>
            <Nav topics={topics} onChangeMode={(_id) => 
            {setMode('READ'); setId(_id);}}></Nav>

            {content}
            <ul>
            <li><a href="/creat" onClick={(event) => {
            event.preventDefault();
            setMode('CREATE');
            }}>Creat</a></li>
            {contextControl}
            </ul>
        </div>
)}
