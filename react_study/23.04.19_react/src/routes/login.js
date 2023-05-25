/*eslint-disable*/
import '../App.css';
import React from 'react'
import { Button, Navbar, Container, Nav, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import axios from 'axios'



function Login() {
    return (
        <LoginInput id={"minji"} />
    )

}


function LoginInput(props) {
    
    let [id,setId] = useState("")
    let [pwd,setPwd] = useState(parseInt())
    
    function change(e) {
        console.log(e);
        console.log(e.target._valueTracker)
    }

    return (
        <div className='container'>
            <form onSubmit={(event) => {
                event.preventDefault();}}>
                    <fieldset>로그인 화면</fieldset>

                    <label><input type="text" name='id' placeholder='Id' onChange={(e) => {change(e)}}/></label>
                     <p></p>
                    <p><input type="password" name='pwd' placeholder='password' /></p>
                    <div className='btnBox'>

                    <button onClick={() => {
                         if( id === "minji" && pwd === 1234)  {alert("회원가입 성공"); } else {  alert( "회원가입 실패")  }}}>로그인</button>
                    <button>회원 가입</button>
                    </div>
            </form>
        </div>
    )
}

export default Login;

