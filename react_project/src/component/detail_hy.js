// import style from '../css/detail_hy.module.css'
import { SideLeftBox, SideRightBox } from "./detail_hy_component";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { detailListChange } from "../createSlice";
import style from '../css/detail_hy.module.css'


function Detail_HY() {
    
    return (
        <>
            <div className={style.detail_box}>
                <SideLeftBox />
                <SideRightBox />
            </div>
        </>
    );
};


export default Detail_HY;
