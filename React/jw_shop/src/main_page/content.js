import style from './content.module.css'
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
// 로딩화면
import Loading from '../loading'
// 메인화면
import Home from '../home/main_of_main'
// top 버튼
import TopBtn from '../topBtn';
// useSelector = 이 함수를 통해 state 접근,useDispatch =>  이 함수를 통해 action함수를 취급
import {useSelector, useDispatch} from 'react-redux'
import { ProductDataReducer } from '../dataSet1';

let count = 0;

// useEffect를 위한 함수(한번만 리렌더링)
function counter() {
    count++
    
}

function Content(props) {

    const [loading, setLoading] = useState(true),
          [data, setData] = useState([]);
    let thisPageUrl = useParams();
    console.log(thisPageUrl)
        
    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:4000${props.url}`)
            .then((response) => {
                const body = response.json();
                return body
            })
            .then((json) => {
                setData(json)
                setLoading(false)
            })
            .catch(error => console.error(error))
    }, [count])
    ////////////////////////////// redux //////////////////////////////

    const dispatch = useDispatch()
    dispatch(ProductDataReducer(data))
    const aa = useSelector(state=>state.dataSet)
    console.log(aa)
    return (
        <>
            {loading ? <Loading /> :
            <div className={style.container}>
                <Home />
                <TopBtn />
                <br/><br/><br/><br/>
                <div id='id1' className={style.contentName}>HOT 아이템</div>
                <div className={style.contentArea}>
                    {data.map((value, idx) => {
                        return (
                            <div key={value.id} className={`${style.content}`}>
                                {/* Link로 하지않고 a태그로 진행하면 다른 컴포넌트인 <ShoppingBasket /> 에서 store에
                                저장되어있던 값을 가져오지 못함. 왜냐하면 a태그는 새로고침을 하는 요소이기 때문. 새로고침
                                하기 때문에 store가 초기화 되면서 값이 비게된다. a 태그를 사용한 이유는 해당
                                컴포넌트에서 다른 컴포넌트로 이동할 때 스크롤 최상단의 화면이 보여지는 것이 아니라
                                이 전의 컴포넌트에서의 scrollTop 만큼 이동한 컴포넌트에 그대로 적용되기 때문.*/}
                                <Link to={`/buyItems/${value.id}`} className={style.textDecoNone}>
                                    {/* img src를 할 때 기존처럼 경로를 붙히면 어떤 문제로 인해서 못읽는다. 
                     리액트에서는 이미지들을 public 폴더에 옮기고 process.env.PUBLIC_URL + '/파일명' 으로 변경해야 한다.
                     일단은 public 폴더로 이미지를 옮기고 불러오면 일반적으로 url불러오는 것 처럼 작성해도 잘 되긴함.*/}
                                    <div className={style.contentImg}><img src={value.url}></img></div>
                                    <div className={style.contentText}>
                                        <span>브랜드 : {value.brand}</span>
                                        <span>제품명 : {value.product}</span>
                                        <span>가격 : {value.price}</span>
                                        <span>평점 : ★★★★</span>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        }</>
    )
}
export { counter }
export default Content;