import React from 'react'

function Header(props) {
    return (
    <h1>
        <a href="/">WEB</a>
    </h1>
    )
}

function Nav(props) {
    const lis = []
    for(let i=0; i<props.items.length; i++){
        let item = props.items[i];
        lis.push(<li key={item.id}><a href={'/read/'+ item.id}>{item.title}</a></li>);
    }
    return (
        <div>
            <ol>
            {lis}
            </ol>
        </div>
    )
}
function Article() {
    return (
        <div>
            Hello, React_ Welcome Here!
        </div>
    )
}

export default function ParentApp() {
  const items = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]
  return (
    <div>
    <Header title='React'></Header>
    <Nav items={items}></Nav>
    <Article></Article>
    </div>
  )
}
