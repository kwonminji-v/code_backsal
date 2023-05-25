/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import styled from 'styled-components';


//외부 라이브러리 사용법 문법으로 복사하여 사용하고, props 문법을 이용하여,
//하나의 컴포넌트로 프로그래밍 적인 것도 가능하다.
// let YelloBtn = styled.button`
//     background-color: ${props => props.bg};
//     color: ${props => props.bg == 'orange' ? "white" : "black"};
//     padding: 10px;
//     `

/* 
컴포넌트의 Lifecycle
Detail 컴포넌트가 보이는 순간을 페이지에 장착된다고 표현한다(mount)
업데이트가 되기도 하고(update), 필요가 없어진다면 제거된다(unmount)
컴포넌트의 update는 재 렌더링을 의미한다.
*/

/* 
useEffect인 이유는 sideEffect라는 단어인 함수의 핵심기능과 상관없는 부가기능을 의미하는데, 그 단어에서 유래됨
//핵심 html 기능이 아닌 sideEffect라는 의미로 보면된다.

여기 안에 적은 코드는 Detail 컴포넌트가 mount, update 시 실행된다!    
useEffect 밖에 console.log('안녕') 이라고 입력해도, mount, update 될 때 콘솔창에 출력된다.
useEffect가 필요한 이유는 useEffect의 간단한 동작원리는 실행 시점이 약간 다른데, useEffect안에 적힌 코드는
렌더링이 완료된 후에 동작한다. (html 코드가 전부 로딩이 된 후)

가정법 - 복잡한 연산문(예를 들면 for 반복문을 100번이상 돌린다는 가정)의 연산이 시간이 걸린다면,
         해당 반복문이 실행이 완료된 후에 html이 실행될텐데, useEffect안에 함수를 넣는다면, html태그가 전부 렌더링 된 후에
         연산문이 실행된다. -> 쉬운 작업을 먼저 보여준 후, 어려운 작업을 실행시키도록 할 수 있다.
         
useEffect안에 적는 코드
- 어려운 연산작업
- 서버에서 데이터 가져오는 작업
- 타이머가 붙게되는 함수들
*/

function Diary(props) {

    let [count, setCount] = useState(0);
    let [isShow, setIsShow] = useState(false);

    //useEffect가 많이 이용되는 경우는, 서버에서 데이터를 요청할때 사용되는 경우가 많다. 데이터 요청이 시간이 걸리는 작업일 시, 데이터를 가져오는 도중에 렌더링이 이루어진다면, 요청 시간 사이에 요청이 반복적으로 이루어지게 되는데, 버그가 생길 확률이 높아진다.
    //그럴 때 return 함수에 기존 데이터 요청은 제거해달라는 문법을 작성해두면 기존 요청과 충돌이 덜해질 수 있다.

    useEffect(() => {
        let timer = setTimeout(() => { setIsShow(true) }, 2000)
        console.log('count가 변경될 때만 실행된다.')

        return () => {
            console.log('cleanupFn이 과연 먼저 동작할까?')
            clearTimeout(timer);
        }
    })

    /* 
           
   useEffect를 쓸 때, 맨 마지막 괄호를 닫을 때, []를 추가해주는 게 더 정확한 코드가 된다. 
   []은 실행조건을 넣을 수 있는 곳을 의미하고, dependency라고 지칭한다. ex) [count, isShow] 등으로 작성이 가능하다.
   dependency 가 없다면 mount나 페이지가 update 될 때 실행되고, [count] 라는 변수로 작성을 한다면 count의 값이 변할 때 실행되도록동작을 제어할 수 있다.
       
   useEffect 문법에 return을 추가할 수가 있는데, return () => { 코드 작성이 가능하다.} 
   이와 같은 function은 clean up function이라고 하는데, useEffect가 동작하기 전에 실행되는 구문이다. 
   예를 들면 위 처럼 timer함수를 만들면, react 특성 상 재 렌더링이 자주 일어나는데 , 타이머가 예상치 못하게 많이 발생할 수 있는데, 그런 상황일 때, return 함수에 기존 타이머를 제거해달라는 함수를 작성하면 문제를 방지할 수 있다.
   
       
       */




    let { id } = useParams();
    let findItem = props.item.find((x) => x.id == id)


    return (
        <>
            <div className="container">
                {
                    isShow === true ? null : <div className="alert alert-warning">
                        2초이내 구매 시 할인
                    </div>
                }
                <button onClick={() => setCount(count + 1)}><span>👍</span></button>{count}
                <div className="row">
                    <div className="col-md-6">
                        <img src={process.env.PUBLIC_URL + `/travel_${props.item[id].id}.jpg`} alt="img" width="100%" />
                    </div>
                    <div className="col-md-6">
                        <h4 className="pt-5">{findItem.title}</h4>
                        <p>{findItem.content}</p>
                        <p>{findItem.price}</p>
                        <button className="btn btn-danger">추가하기</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Diary;

//숙제 Detail 페이지 방문 후 2초 지나면 div 숨기기