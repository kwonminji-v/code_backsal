
왼쪽 MENU 요소를 클릭했을 때, 스크롤 이동 동작가능 코드
function SideLeftBox(props) {


function scrollMove(x, y) {
        window.scrollTo({ top: y, left: x, behavior: 'smooth' });
    }
    return (
        <>
        <div className={style.left_side_box}>
            <div className={style.left_btn_box}>
                <button onClick={() => scrollMove(0, 0)}>상품 안내</button>
}}