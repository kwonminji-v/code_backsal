import style from './topBtn.module.css'
import { useState } from 'react';

// top 버튼 클릭시 최상단으로 이동하는 기능
function moveTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
}

function TopBtn() {
    const [btnMarginTop, setBtnMarginTop] = useState(document.documentElement.scrollTop + document.documentElement.clientHeight -100);
    window.onscroll = () => {
        setBtnMarginTop(document.documentElement.scrollTop + document.documentElement.clientHeight - 100)

    }
    window.onresize = () => {
        setBtnMarginTop(document.documentElement.scrollTop + document.documentElement.clientHeight - 100)
    }
    return (
        <div style={{ marginTop: `${btnMarginTop}px` }} className={style.topBtnArea}>
            ∧<br />∧<br /><br />
            <div onClick={moveTop} className={style.topBtn}>top</div>
        </div>
    )
}

export default TopBtn;