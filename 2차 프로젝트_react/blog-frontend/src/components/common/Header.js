import { Link, useParams } from 'react-router-dom'
import style from '../../css/jw_header.module.css';
import { useEffect, useState } from "react";
import { useLocation } from '../../../node_modules/react-router-dom/dist/index';
import { useDispatch, useSelector } from 'react-redux';
import { modalRdc } from '../../data/jw_data';

const Header = ({user, onLogout}) => {
    let a = [true, false, false, false]
    const [onOff, setOnOff] = useState(a),
          dispatch = useDispatch(),
          myInfo = useLocation();

    if(myInfo.pathname.indexOf('main')!==-1){
        a[0]=true
        a[1]=false
        a[2]=false
        a[3]=false
    }
    if(myInfo.pathname.indexOf('myInfo')!==-1){
        a[0]=false
        a[1]=true
        a[2]=false
        a[3]=false        
    }
    if(myInfo.pathname.indexOf('event')!==-1){
        a[0]=false
        a[1]=false
        a[2]=true
        a[3]=false    
    }
    if(myInfo.pathname.indexOf('postlist')!==-1 || myInfo.pathname.indexOf('notice')!==-1 || myInfo.pathname.indexOf('question')!==-1){
        a[0]=false
        a[1]=false
        a[2]=false
        a[3]=true
    }

    useEffect(()=>{
        setOnOff(a)
    },[])
    
    function mygoodocClick(){
        dispatch(modalRdc(false))

    }
            return(
                <>
                <div className={style.container}>
            <div className={style.header}>
                <div className={style.menu}>
                    <Link to='/' ><img src={process.env.PUBLIC_URL + '../../../logo.png'} alt=''/></Link>
                    <Link to='/main' className={style.linkStyle}><button id='header1'  className={ (onOff[0] ? `${style.selected}`:`${style.buttonOff}`)}>구독신청</button></Link>
                    {user?<Link to='/main/myInfo' className={style.linkStyle}><button id='header2' className={ (onOff[1] ? `${style.selected}`:null)}>MY 구독</button></Link>:<button onClick={mygoodocClick} id='header2' className={ (onOff[1] ? `${style.selected}`:`${style.buttonOff}`)}>MY 구독</button>}
                    <Link to='/postlist' className={style.linkStyle}><button id='header4' className={ (onOff[3] ? `${style.selected}`:`${style.buttonOff}`)}>고객센터</button></Link>
                </div>

                      {user? (<>
                               <div style={{marginRight:'-600px'}}>안녕하세요 {user.username} 님</div>
                            <div className={style.logIn}>
                                <Link to='/main' onClick={onLogout} ><i style={{marginRight:'5px'}} className="fa-solid fa-arrow-right-to-bracket" />로그아웃</Link>
                            </div></>
                        ) : (
                            <div className={style.logIn}>
                                <Link to='/login'><i style={{marginRight:'5px'}} className="fa-solid  fa-arrow-right-to-bracket" />로그인</Link>
                            </div>
                        )}
            </div>
        </div>
                </>
            )
        }

export default Header;



// // import styled from "styled-components";
// // import Responsive from "./Responsive";
// // import Button from "./Button";
// import style from '../common/css/jw_header.module.css';
// import { useState } from 'react';
// import { Link } from 'react-router-dom'



// // const HeaderBlock = styled.div`
// //     position: fixed;
// //     width: 100%;
// //     background: white;
// //     box-shadow: 0px 2px 4px rgba(0,0,0,0.08);
// //     `;

// //     // Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성

// // const Wrapper = styled(Responsive)`
// //         height: 4rem;
// //         display: flex;
// //         align-items: center;
// //         justify-content: space-between;
// //         .logo {
// //             font-size : 1.125rem;
// //             font-weight : 800;
// //             letter-spacing: 2px;
// //         }
// //         .right {
// //             display: flex;
// //             align-items: center;
// //         }
// //         `;

// //         // 헤더가 fixed로 되어 있기 때문에 페이지의 콘텐츠가 4rem아래에 나타나도록 해 주는 컴포넌트

// // const Spacer = styled.div`
// //             height: 4rem;
// //         `;


// // const UserInfo = styled.div`
// // font-weight: 800;
// // margin-right: 1rem;
// // `;

// const Header = ({user, onLogout}) => {
//     let a=[true, false, false, false]
//     const[onOff, setOnOff] = useState(a)

//     const onOffFunction = (e) => {
//        let b = e.target.id
//        a = [false, false, false, false]

//        for(var i=0; i<a.length; i++){
//          if(b===`header${i+1}`){
//             a[i] = true
//          }
//        }
//        setOnOff(a)
//     }
//             return(
//                 <>


// <div className={style.container}>
//             <div className={style.header}>
//                 <div className={style.menu}>
//                     <Link to='/' onClick={onOffFunction} ><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQON_GawiUP2UC1l9Ib0DKuZhZRzXk13jXadg&usqp=CAU' alt=''/></Link>
//                     <Link to='/main' className={style.linkStyle}><button id='header1' onClick={onOffFunction} className={ (onOff[0] ? `${style.selected}`:null)}>구독신청</button></Link>
//                     <Link to='/main/myInfo' className={style.linkStyle}><button id='header2' onClick={onOffFunction} className={ (onOff[1] ? `${style.selected}`:null)}>MY 구독</button></Link>
//                     <Link to='/' className={style.linkStyle}><button id='header3' onClick={onOffFunction} className={ (onOff[2] ? `${style.selected}`:null)}>이벤트</button></Link>
//                     <Link to='/' className={style.linkStyle}><button id='header4' onClick={onOffFunction} className={ (onOff[3] ? `${style.selected}`:null)}>고객센터</button></Link>
//                 </div>
//                 <div className={style.logIn}>
//                     <i style={{marginRight:'5px'}} className="fa-solid  fa-arrow-right-to-bracket" />
//                     {user? (
                        
//                             <div>
//                                  <i style={{marginRight:'5px'}} className="fa-solid  fa-arrow-right-to-bracket" onClick={onLogout} />{user.username}로그아웃
//                                 {/* <Button onClick={onLogout}>로그아웃</Button> */}
//                             </div>
//                         ) : (
//                             <div>
//                                 <i style={{marginRight:'5px'}} className="fa-solid  fa-arrow-right-to-bracket"/>로그인
//                                 <Link to='/login'></Link>
//                             </div>
//                         )}
                
//                 </div>
//             </div>
//         </div>
                
                    
//                         {/* <Link to='/' className='logo'>REACTERS</Link>
//                         {user? (
//                             <div className="right">
//                                 <UserInfo>{user.username}</UserInfo>
//                                 <Button onClick={onLogout}>로그아웃</Button>
//                             </div>
//                         ) : (
//                             <div className="right">
//                                 <Button to="/login">로그인</Button>
//                             </div>
//                         )}
//                     */}
                
                
//                 </>
//             )
//         }

// export default Header;