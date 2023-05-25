import style from './main.module.css'
function Main() {
  
    return (
        <>
            <div className={style.blank}></div>
            <div className={style.mainDiv}><img src={process.env.PUBLIC_URL + '/main2.png'} /></div>
            <div className={style.blank} style={{marginTop:'-10px'}}></div>
            <div className={style.mainDiv}><img src={process.env.PUBLIC_URL + '/main3.jpg'} /></div>
        </>
    )
}
export default Main;