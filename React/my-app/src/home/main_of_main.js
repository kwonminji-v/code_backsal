/*npm install json-server
  npm install concurrently */
import style from './main_of_main.module.css';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { counter } from '../main_page/content';
import ProgressBar from '../progressBar';

function App() {

  return (
    <>
      <div className={style.container}>
      {/* <ProgressBar /> */}
        <div className={style.mainImg}>
          <div className={style.title}>
            <div className={style.logo}><Link to='/' className={style.menu}>재 원 샵</Link></div>
            <div className={style.signInOutUpArea}>
              <Link to='login/' className={`${style.signInOutUpAreaText}`}>로그인</Link>
              <Link to='signUp/' className={`${style.signInOutUpAreaText}`}>회원가입</Link>
              <Link to='withdrawal/' className={`${style.signInOutUpAreaText}`}>회원탈퇴</Link>
            </div>
          </div>
          <div className={style.menu_area}>
            <div className={style.menu_area_area}>
              <Link onClick={counter} to='/manCloth/' className={style.menu} >남성 의류</Link>
              <Link onClick={counter} to='/manShoe/' className={style.menu}>남성 신발 </Link>
              <Link onClick={counter} to='/womanCloth/' className={style.menu}>여성 의류</Link>
              <Link onClick={counter} to='/womanShoe/' className={style.menu}>여성 신발 </Link>
              <Link onClick={counter} to='/아무개2/' className={style.menu}>기타 </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default App;
