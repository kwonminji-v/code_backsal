import style from '../css/mj_detail.module.css'
import { Table, SideRightBox, SideLeftBox, DetailInfoe } from "./mj_detail_component";



function Detail_MJ() {

    return (
        <>
            <div className={style.detail_box}>
                <SideLeftBox />
                <SideRightBox />
            </div>
        </>
    );
};

export default Detail_MJ;
