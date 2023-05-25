import style from '../css/mj_mypage.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import HeaderContainer from '../components/common/HeaderContainer';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';



function Mj_mypage_coupon() {
    const { user } = useSelector(({ user }) => ({ user: user.user }));
    const data = useSelector(store => store.dataSet),
        contentData = data.contentsData

    return (
        <>
            <HeaderContainer />
            <div className={style.jw}>
                <div className={style.mypage_container}>
                    <div className={style.both_mypage_container}>
                        <div className={style.left_mypage_container}>
                            <div className={style.left_mypage_menu} >
                                <div className={style.mypage_menu_list} >
                                    <h4>MY 구독</h4>
                                    <Link to='/main/myInfo/'>구독 상품<div style={{ display: "inline-block" }}>▶</div></Link>
                                    <Link to='/main/myInfo/coupon/'>쿠폰함 ▶</Link>
                                    <Link to='/main/myInfo/month/'>이용 내역▶</Link>
                                </div>
                            </div>
                        </div>
                        <CouponPage data={contentData} user={user} />
                    </div>
                </div >
            </div>
        </>
    );
}




function CouponPage(props) {


    return (
        <>
            <div className={style.right_mypage_menu}>
                <section className="py-5">
                    <div style={{ width: "450px" }} className="container px-5">
                        <h2 className="fw-bolder fs-5 mb-4" >{props.user.username}님이 보유중인 쿠폰입니다.</h2>
                        <div style={{ width: "60vw" }}>
                            <div className="mb-5" style={{ width: "350px", display: "inline-block", marginRight: "30px" }}>
                                <div className="card h-100 shadow border-0">
                                    <div className="card-body p-4" style={{ fontSize: "13px" }}>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <img src="https://image.lguplus.com/static/pc-contents/images/pogg/20230503-100516-384-lJ4Nb3VQ.gif" style={{ width: "50px" }} alt="" />
                                            <p className={style.coupon_title}>GS25 Cafe 25 구독 30일 이용권</p>
                                        </div>
                                        <div style={{ marginTop: "20px" }}>
                                            <div className={`mb-2 ${style.coupon_menu_box} `} style={{ display: "flex" }}>
                                                <span className={style.coupon_menu}>쿠폰 등록 기간</span>
                                                <p>2023.04.24 ~ 2023.05.31</p>
                                            </div>
                                            <div className={`mb-2 ${style.coupon_menu_box} `} style={{ display: "flex" }}>
                                                <span className={style.coupon_menu}>쿠폰 사용 기간</span>
                                                <p style={{ marginLeft: "18px" }}>발급일 기준 익월 말일까지 사용가능</p>
                                            </div>
                                            <div className={`mb-2 ${style.coupon_menu_box} `} style={{ display: "flex", alignItems: "baseline" }}>
                                                <span className={style.coupon_menu}>쿠폰 번호</span>
                                                <p>D00185321645626516184846</p>
                                                <button className={style.coupon_copybtn}>복사</button>
                                            </div>
                                        </div>
                                        <button style={{ marginTop: "20px", width: "100%", height: "35px", color: "white", backgroundColor: "black", borderRadius: "5px" }}>사용하러 가기</button>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5" style={{ width: "350px", display: "inline-block", marginRight: "30px" }}>
                                <div className="card h-100 shadow border-0">
                                    <div className="card-body p-4" style={{ fontSize: "13px" }}>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <img src="https://image.lguplus.com/static/pc-contents/images/pogg/20221207-115230-854-OQqzIrYr.png" style={{ width: "50px" }} alt="" />
                                            <p className={style.coupon_title}>올리브영 기프트카드 1개월 구독권</p>
                                        </div>
                                        <div style={{ marginTop: "20px" }}>
                                            <div className={`mb-2 ${style.coupon_menu_box} `} style={{ display: "flex" }}>
                                                <span className={style.coupon_menu}>쿠폰 등록 기간</span>
                                                <p>2023.05.01 ~ 2023.05.31</p>
                                            </div>
                                            <div className={`mb-2 ${style.coupon_menu_box} `} style={{ display: "flex" }}>
                                                <span className={style.coupon_menu}>쿠폰 사용 기간</span>
                                                <p style={{ marginLeft: "18px" }}>발급일 기준 익월 말일까지 사용가능</p>
                                            </div>
                                            <div className={`mb-2 ${style.coupon_menu_box} `} style={{ display: "flex", alignItems: "baseline" }}>
                                                <span className={style.coupon_menu}>쿠폰 번호</span>
                                                <p>D00185321645626516186954</p>
                                                <button className={style.coupon_copybtn}>복사</button>
                                            </div>
                                        </div>
                                        <button style={{ marginTop: "20px", width: "100%", height: "35px", color: "white", backgroundColor: "black", borderRadius: "5px" }}>사용하러 가기</button>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5" style={{ width: "350px", display: "inline-block", marginRight: "30px" }}>
                                <div className="card h-100 shadow border-0">
                                    <div className="card-body p-4" style={{ fontSize: "13px" }}>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <img src="https://image.lguplus.com/static/pc-contents/images/pogg/20221207-115452-482-NI3gChbj.png" style={{ width: "50px" }} alt="" />
                                            <p className={style.coupon_title}>폴바셋 기프트카드 30일 구독권</p>
                                        </div>
                                        <div style={{ marginTop: "20px" }}>
                                            <div className={`mb-2 ${style.coupon_menu_box} `} style={{ display: "flex" }}>
                                                <span className={style.coupon_menu}>쿠폰 등록 기간</span>
                                                <p>2023.04.26 ~ 2023.05.31</p>
                                            </div>
                                            <div className={`mb-2 ${style.coupon_menu_box} `} style={{ display: "flex" }}>
                                                <span className={style.coupon_menu}>쿠폰 사용 기간</span>
                                                <p style={{ marginLeft: "18px" }}>발급일 기준 익월 말일까지 사용가능</p>
                                            </div>
                                            <div className={`mb-2 ${style.coupon_menu_box} `} style={{ display: "flex", alignItems: "baseline" }}>
                                                <span className={style.coupon_menu}>쿠폰 번호</span>
                                                <p>D00185321645626516121597</p>
                                                <button className={style.coupon_copybtn}>복사</button>
                                            </div>
                                        </div>
                                        <button style={{ marginTop: "20px", width: "100%", height: "35px", color: "white", backgroundColor: "black", borderRadius: "5px" }}>사용하러 가기</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="py-5">
                    <div style={{ width: "450px" }} className="container px-5">
                        <h2 className="fw-bolder fs-5 mb-4" >만료된 쿠폰입니다.</h2>
                        <div style={{ width: "60vw" }}>
                            <div className="mb-5" style={{ width: "350px", display: "inline-block", marginRight: "30px" }}>
                                <div className="card h-100 shadow border-0">
                                    <div className="card-body p-4" style={{ fontSize: "13px" }}>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <img src="https://image.lguplus.com/static/pc-contents/images/pogg/20221207-115523-197-Fx4SUcis.png" style={{ width: "50px" }} alt="" />
                                            <p className={style.coupon_title}>일리커피머신 & 커피캡슐 30일 구독권</p>
                                        </div>
                                        <div style={{ marginTop: "20px" }}>
                                            <div className={`mb-2 ${style.coupon_menu_box} `} style={{ display: "flex" }}>
                                                <span className={style.coupon_menu}>쿠폰 등록 기간</span>
                                                <p>2023.04.01 ~ 2023.05.01</p>
                                            </div>
                                            <div className={`mb-2 ${style.coupon_menu_box} `} style={{ display: "flex" }}>
                                                <span className={style.coupon_menu}>쿠폰 사용 기간</span>
                                                <p style={{ marginLeft: "18px" }}>발급일 기준 익월 말일까지 사용가능</p>
                                            </div>
                                            <div className={`mb-2 ${style.coupon_menu_box} `} style={{ display: "flex", alignItems: "baseline" }}>
                                                <span className={style.coupon_menu}>쿠폰 번호</span>
                                                <p>D00185321645626516184846</p>
                                                <button className={style.coupon_copybtn}>복사</button>
                                            </div>
                                        </div>
                                        <button style={{ marginTop: "20px", width: "100%", height: "35px", color: "white", backgroundColor: "black", borderRadius: "5px" }}>사용하러 가기</button>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5" style={{ width: "350px", display: "inline-block", marginRight: "30px" }}>
                                <div className="card h-100 shadow border-0">
                                    <div className="card-body p-4" style={{ fontSize: "13px" }}>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <img src="https://image.lguplus.com/static/pc-contents/images/pogg/20221207-122652-330-Md7p9keZ.png" style={{ width: "50px" }} alt="" />
                                            <p className={style.coupon_title}>티빙 30일 구독권</p>
                                        </div>
                                        <div style={{ marginTop: "20px" }}>
                                            <div className={`mb-2 ${style.coupon_menu_box} `} style={{ display: "flex" }}>
                                                <span className={style.coupon_menu}>쿠폰 등록 기간</span>
                                                <p>2023.04.18 ~ 2023.05.05</p>
                                            </div>
                                            <div className={`mb-2 ${style.coupon_menu_box} `} style={{ display: "flex" }}>
                                                <span className={style.coupon_menu}>쿠폰 사용 기간</span>
                                                <p style={{ marginLeft: "18px" }}>발급일 기준 익월 말일까지 사용가능</p>
                                            </div>
                                            <div className={`mb-2 ${style.coupon_menu_box} `} style={{ display: "flex", alignItems: "baseline" }}>
                                                <span className={style.coupon_menu}>쿠폰 번호</span>
                                                <p>D00185321645626516184846</p>
                                                <button className={style.coupon_copybtn}>복사</button>
                                            </div>
                                        </div>
                                        <button style={{ marginTop: "20px", width: "100%", height: "35px", color: "white", backgroundColor: "black", borderRadius: "5px" }}>사용하러 가기</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </>
    )

}



export default Mj_mypage_coupon;

