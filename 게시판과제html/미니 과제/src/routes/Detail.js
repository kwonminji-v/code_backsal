/*eslint-disable*/
// import { useState } from "react";
// 관리하기가 어려워서 두곳을 다 수정해야 하니 한곳에서만 사용하게 된다 
import { useParams } from 'react-router-dom'
//import styled from 'styled-components'

// let Box = styled.div`
//   padding : 20px;
//   color : grey
// `;
/* let YellowBtn = styled.button`
  background : yellow;
  color : black;
  padding : 10px;
`; */

// let YellowBtn = styled.button`
//   background : ${ props => props.bg };
//   color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
//   /* color : black; */
//   padding : 10px;
// `;
/* 엘로우버튼을 컨포넌트를 가져다쓸때 bg라는 props를 가져다 쓸수있다 */

import {useState, useEffect} from 'react';
import { Nav } from 'react-bootstrap'
import { addItem } from "./../store.js";
import { useDispatch } from "react-redux";


function Detail(props){ 

  let { id } = useParams();
  let 찾은상품 = props.shoes.find(x=>x.id == id);
  let [count, setCount] = useState(0)
  let [alert, setAlert] = useState(true)
  let [탭,탭변경] = useState(0)

  console.log(찾은상품)
  // let [count, setCount] = useState(0)
  // let [alert, setAlert] = useState(true)
  // let [탭, 탭변경] = useState(2)
  
  //내용2 가 보인다
  //let [탭, 탭변경] = useState(0)  변경해보기
  //let [탭, 탭변경] = useState(1)
  

  // useEffect(()=>{
  //   setTimeout(()=>{ setAlert(false) }, 2000)
  //   console.log(5)
  // }, [])
//[] 디펜던시라고 부른다 없어도 되지만 []안의 무엇이 변할때만 실해이된다라는 소리
//mount에만 실행된다 업데이트시 실행안된다,컴포넌트 마운트시 1회만 실행하고 싶을때 이렇게 작성한다
//아무것도 안넣으면 컴포넌트 mount시 (로드시) 1회 실행하고 영영 실행해주지 않습니다. 5가 처음에만 출력되고 업데이트시 출력안된다

  // useEffect(()=>{  쓸때 없이 반복하는 코드할때 유용하다
  //   (반복문 10억번 돌리는 코드)
  // });

  let dispatch = useDispatch()

  // useEffect(()=>{
  //   let 꺼낸거 = localStorage.getItem('watched')
  //   꺼낸거 = JSON.parse(꺼낸거)
  //   꺼낸거.push(찾은상품.id)
  //   localStorage.setItem('watched', JSON.stringify(꺼낸거))
  // }, [])
  
  // useEffect(()=>{
  //   let 꺼낸거 = localStorage.getItem('watched')
  //   꺼낸거 = JSON.parse(꺼낸거)
  //   꺼낸거.push(찾은상품.id)
  
  //   //Set으로 바꿨다가 다시 array로 만들기
  //   꺼낸거 = new Set(꺼낸거)
  //   꺼낸거 = Array.from(꺼낸거)
  //   localStorage.setItem('watched', JSON.stringify(꺼낸거))
  // }, [])
  

  useEffect(()=>{ 
    let a = setTimeout(()=>{ setAlert(false) }, 2000)
    console.log(3)
    return ()=>{
      console.log(4)
      clearTimeout(a)
    }
  }, [])
  //[] 없으면 4가먼저 실행 그담 3 끝
  //[] 있으면 3 4 3 

  console.log('안녕') 

  //let {id} = useParams();
  //console.log(id)

    return (
        <div className="container">          
           {
              alert == true
              ? <div className="alert alert-warning">
                  2초이내 구매시 할인
                </div>
              : null
           }
          
          {count}
          <button onClick={()=>{ setCount(count+1) }}>버튼</button>

        {/* <Box>
          <YellowBtn bg="orange">오렌지색 버튼임</YellowBtn>
          <YellowBtn bg="blue">파란색 버튼임</YellowBtn>
        </Box> */}

       <div className="row">
        <div className="col-md-6">
          {/* <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" /> */}
          <img src={process.env.PUBLIC_URL + '/shoes1.jpg'} width="100%"/>  
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div> 

        <div className="row mb-5">
          <div className="col-md-4">            
            <img src={process.env.PUBLIC_URL + '/shoes1.jpg'} width="100%"/>          
          </div>
          <div className="col-md-4">         
            {/* <h4 className="pt-5"> {props.shoes[0].title}</h4> */}
            {/* <h4 className="pt-5">{props.shoes[id].title}</h4> */}
            <h4 className="pt-5">{찾은상품.title}</h4>

            {/* <p>{props.shoes[id].content}</p>
            <p>{props.shoes[id].price}원</p> */}

            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}원</p>

            {/* <button className="btn btn-danger">주문하기</button> */}
            <button className="btn btn-danger" onClick={()=>{
              dispatch(addItem( {id : 1, name : 'Red Knit', count : 1} ))
              
            }}>주문하기</button>

          </div>          
        </div>
{/* defaultActiveKey="link0" 기본으로 눌려져 있는 키 */}

        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link onClick={() => { 탭변경(0) }} eventKey="link0">버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => { 탭변경(1) }} eventKey="link1">버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => { 탭변경(2) }} eventKey="link2">버튼2</Nav.Link>
          </Nav.Item>
        </Nav>

         <TabContent 탭={탭}/>       

      </div>      
    )
  }
 
  function TabContent({탭}){

    let [fade, setFade] = useState('')
  
    useEffect(()=>{
      // setTImeout(()=>{ setFade('end') }, 100)
      let a = setFade('end')//그담실행
    return ()=>{
      clearTimeout(a)
      setFade('')//먼저실행
    }
    }, [탭])
  
    return (
      <div className={'start ' + fade}>
        { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭] }
      </div>
    )
  }
  
  export default Detail;

