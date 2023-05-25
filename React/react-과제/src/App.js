/*eslint-disable*/
//주석은 ESLint 규칙을 일시적으로 비활성화하는 방법이다.
import logo from './logo.svg';
import './App.css';


function Header(props) {
    console.log(props)
    return <header>
        <h1><a href="/">{props.title}</a></h1>
        {/* 중괄호 사이에 있는 문자열은 표현식으로 해석되기 때문에 REACT로 header의 내용이 변경된다. */}
    </header>
}


function Nav(props) {
    const lis = []
    for(let i=0; i<props.topics.length; i++){
        let t = props.topics[i];
        lis.push(<li key={t.id}><a href={'/read/'+ t.id}>{t.title}</a></li>);
    }
    console.log(lis)
   return <nav>
    <ol>
    {lis}
    </ol>
</nav>
}


function Article(props) {
    console.log(props, props.title, props.body)
    return  <article>
    <h2>{props.title}</h2>
    {props.body}
</article>
}


function App() {
/* 담긴 정보들이 여러개이기 때문에 배열에 담아서 저장하였다. */
    const topics = [
        {id:1, title:'html', body:'html is ...'},
        {id:2, title:'css', body:'css is ...'},
        {id:3, title:'javascript', body:'javascript is ...'}
    ]
    return (
        <div>
            <Header title="WEB"></Header>
            <Nav topics = {topics}></Nav>
        {/* 중괄호 없이 작성한다면 단순한 문자열만 저장이 됨. 중괄호로 감싸면 있는 그대로 전달이 된다. */}
            <Article title="Welcome" body="Hello, WEB"></Article>
        </div>
    );
}

/* 
사용자 정의 태그를 만들때는 함수를 정의해야 한다. react에서 사용자 정의 태그를 만들 시에는 반드시 대문자로 시작해야한다.
사용자 정의 태그 = 컴포넌트 각각의 코드가 담긴 태그가 이름을 갖고있기 때문에 어떤 취지의 코드인지 바로 파악이 가능하고, 내용을 변경해준다면 모든 코드를 동시에 변경할 수 있다 

리액트는 속성을 PROP이라고 부른다.
 */
export default App;
