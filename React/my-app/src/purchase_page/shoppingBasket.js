import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import style from './shoppingBasket.module.css'
import TopBtn from '../topBtn';
import { useSelector, useDispatch } from 'react-redux';
import {likeDataReducer} from '../dataSet1'
function ShoppingBasket() {
    /* useParams를 활용하려면 Route path='~~~/:productId' 경로가 있는 해당 컴포넌트 안에서 
    useParams를 사용해야 한다.*/
    let { productId } = useParams();
    console.log("useParams : ", productId)
    /* state.dataSet에서 dataSet은 rootReducer = combineReducers({}) 안에 있는 dataSet 이다.
    따라서 data를 콘솔 출력해보면 initialState에 있는 데이터들이 존재한다.*/
    
    const data = useSelector(state => state.dataSet);
    const importedLikeCount = useSelector(state => state.dataSet.likeData),
          [likeCount, setLikeCount] = useState(importedLikeCount),
          showProductData = data.productData.find(x => x.id === productId);
    // 자바스크립트문을 JSON 문서로 변환하려면 JSON.stringify(변환 할 js)
    const convertJSON = JSON.stringify(showProductData);
    // JSON 문서를 자바스크립트 객체로 파싱하려면 JSON.parse(변환 할 JSON)
    const dispatch = useDispatch();
    console.log(convertJSON)

    function SendLikeData(){
        fetch('http://localhost:4000/ManCloth',{
            method:"POST",
            body:convertJSON
        })
        // dispatch(likeDataReducer(showProductData))

    }
    return (
        <>
            <div className={style.container}>
                <TopBtn />
                <div className={style.header}>
                    <div className={style.signInUpAreaa}>
                        <div className={style.signInUpArea}>
                            <Link className={style.linkStyle}>로그인</Link>
                            <Link className={style.linkStyle}>회원가입</Link>
                            <Link className={style.linkStyle}>회원탈퇴</Link>
                        </div>
                    </div>
                    <div className={style.logoArea}><Link to='/' className={style.linkStyle}>재 원 샵</Link></div>
                    <div className={style.menuArea}>
                        <Link to='/manCloth/' className={style.menu} >남성 의류</Link>
                        <Link to='/manShoe/' className={style.menu}>남성 신발 </Link>
                        <Link to='/womanCloth/' className={style.menu}>여성 의류</Link>
                        <Link to='/womanShoe/' className={style.menu}>여성 신발 </Link>
                        <Link to='/아무개2/' className={style.menu}>기타 </Link>
                    </div>
                </div>
                <div className={style.main}>
                    <div className={style.content}>
                        <div className={style.leftArea}>
                            <div className={style.imgArea}><img src={showProductData.url}></img></div>
                        </div>
                        <div className={style.rightArea}>
                            <div className={style.rightAreaDiv}><br />
                                <table>
                                    <tr>
                                        <td>상품명</td>
                                        <td>{showProductData.product}</td>

                                    </tr>
                                    <tr>
                                        <td>브랜드</td>
                                        <td>{showProductData.brand}</td>

                                    </tr>
                                    <tr>
                                        <td>판매가</td>
                                        <td>{showProductData.price}</td>

                                    </tr>
                                </table>
                            </div>
                            <div className={style.rightAreaDiv}><br />
                                <table>
                                    <tr>
                                        <td>카드혜택</td>
                                        <td>없다</td>

                                    </tr>
                                    <tr>
                                        <td>적립혜택</td>
                                        <td>이것도 없다.</td>

                                    </tr>
                                    <tr>
                                        <td>맴버쉽혜택</td>
                                        <td>등급별 혜택 보기</td>

                                    </tr>
                                </table>
                            </div>
                            <div className={style.rightAreaDiv}><br />
                                <table>
                                    <tr>
                                        <td>배송구분</td>
                                        <td>10만원 이상 구매시 무료배송 <button onClick={1} className={style.cautionBtn}>i</button></td>

                                    </tr>
                                    <tr>
                                        <td>배송예정</td>
                                        <td>아마도 오늘</td>

                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>늦어도 내일까지는 올걸 <button onClick={1} className={style.cautionBtn}>i</button></td>

                                    </tr>
                                    <tr>
                                        <td>사이즈 안내</td>
                                        <td>알아서 입어 <button onClick={1} className={style.cautionBtn}>i</button></td>

                                    </tr>
                                    <tr>
                                        <td>재질</td>
                                        <td>상품에 따라 다름</td>

                                    </tr>
                                    <tr>
                                        <td>구매수</td>
                                        <td>111</td>

                                    </tr>
                                    <tr>
                                        <td>좋아요</td>
                                        <td>{showProductData.like}</td>

                                    </tr>
                                </table>
                            </div>
                            <div className={style.btnArea}>
                                <button onClick={SendLikeData} className={style.likeBtn}><i style={{color:'rgb(247, 165, 226)', fontSize:'20px', marginRight:'10px'}} className="fa-solid fa-heart"></i>좋아요</button>
                                <Link to=''><button className={style.shoppingCartBtn}><i style={{color:'rgb(150, 158, 158)', fontSize:'20px', marginRight:'10px'}} className="fa-solid fa-cart-shopping"></i>장바구니</button></Link>
                                <Link to=''><button className={style.purchaseBtn}>구매하기</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className={style.productInfoArea}>상세설명 영역</div>
                </div>
            </div>
        </>
    )
}
export default ShoppingBasket;