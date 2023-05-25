import style from '../css/mj_mypage.module.css'
import { Container, Button, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react'
import { Routes, Route, useNavigate, Outlet, Link } from 'react-router-dom'

function Mypage_MJ() {
    const [modal, setModal] = useState(false);


    const couponModal = (e) => {
        setModal(true);

    }
    const couponModalClose = () => {
        setModal(false);
    }

    return (
        <>
            <div className={style.mypage_container}>
                <main>
                    <h4>MY 구독</h4>
                    <div className={style.both_mypage_container}>
                        <div className={style.left_mypage_container}>
                            <div className={style.left_mypage_menu} >
                                <div className={style.mypage_menu_list} >
                                    <Link href='/home'>구독 중인 상품<div style={{ display: "inline-block" }}>▶</div></Link>
                                    <Link href='/coupon'>쿠폰함 ▶</Link>
                                    <Link href='/month'>월별 이용 내역▶</Link>
                                    <Link href='/payment'>구독료 결제 정보▶</Link>
                                </div>
                            </div>
                        </div>
                        <Routes>
                            <Route path='/coupon' element=
                                {modal ? <div className='coupon_modal' >보유하고 있는 쿠폰 갯수</div> : null}
                            >

                            </Route>
                        </Routes>
                        {modal ? "" : <Right_mypage_menu />}
                    </div>
                </main >
            </div >
        </>
    );
}


function Right_mypage_menu() {
    return (

        <div className={style.right_mypage_menu}>
            <section className="py-3 col-lg-8">
                <div className="container px-5" style={{ padding: "0px", margin: "0px", width: "1240px" }}>
                    <h1 className="fw-bolder fs-5 mb-4">권민지님이 구독중인 상품입니다.</h1>
                    <div className="card border-0 shadow rounded-3 overflow-hidden">
                        <div className="card-body p-0">
                            <div className="row gx-0">
                                <div className="col-lg-6 col-lg-5">
                                    <div className="p-4 p-md-5">
                                        <div className="d-flex badge bg-primary bg-gradient rounded">현재 구독중인 상품</div>
                                        <img src="https://image.lguplus.com/static/pc-contents/images/pogg/20230420-015730-624-QW9YdNkP.png" alt="" />
                                        <div className="h2 fw-bolder"></div>
                                        <p>CGV 2D 영화관람권 정기 구독권</p>
                                        <a className="stretched-link text-decoration-none" href="#!">
                                            더보기
                                        </a>
                                    </div>
                                    <div className="p-4 p-md-5">
                                        <div className="badge bg-primary bg-gradient rounded-pill mb-2">현재 구독중인 상품</div>
                                        <div className="h2 fw-bolder"></div>
                                        <p>CGV 2D 영화관람권 정기 구독권</p>
                                        <a className="stretched-link text-decoration-none" href="#!">
                                            더보기
                                        </a>
                                    </div>
                                    <div className="p-4 p-md-5">
                                        <div className="badge bg-primary bg-gradient rounded-pill mb-2">현재 구독중인 상품</div>
                                        <div className="h2 fw-bolder"></div>
                                        <p>ㅇㄴㅍㅁㄴㅇㅁㄴㅇㄹㄴㅁㅇㄹ.</p>
                                        <a className="stretched-link text-decoration-none" href="#!">
                                            더보기
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container px-5">
                    <div className="row gx-5">
                        <div className="col-xl-8">
                            <h2 className="fw-bolder fs-5 mb-4">계정을 연결해주세요!</h2>
                            <div className="mb-4">
                                <div className="small text-muted">계정 연결 전까지는 구독료가 발생되지 않습니다.<br></br>
                                    신청일 이후 40일이 지나면 신청내역이 자동으로 삭제됩니다.</div>
                            </div>
                            <div className="col-xl-12">
                                <div className="card border-0 h-100">
                                    <div className="card-body p-4 border-0 shadow">
                                        <div className="d-flex h-100 align-items-center justify-content-center">
                                            <div className="text-center">
                                                <div className="h6 fw-bolder">넷플릭스</div>
                                                <p className="text-muted mb-4">
                                                    신ㄴ청일 : 몇월 며칠
                                                    <br />
                                                    <a href="#!">계정 주소 press@domain.com</a>
                                                </p>
                                                <div className="h6 fw-bolder">더보기</div>
                                                <div style={{ border: "1px solid black" }}></div>
                                                <div className="h6 fw-bolder">넷플릭스</div>
                                                <p className="text-muted mb-4">
                                                    신ㄴ청일 : 몇월 며칠
                                                    <br />
                                                    <a href="#!">계정 주소 press@domain.com</a>
                                                </p>
                                                <div className="h6 fw-bolder">더보기</div>
                                                <div style={{ border: "1px solid black" }}></div>
                                                <div className="h6 fw-bolder">넷플릭스</div>
                                                <p className="text-muted mb-4">
                                                    신ㄴ청일 : 몇월 며칠
                                                    <br />
                                                    <a href="#!">계정 주소 press@domain.com</a>
                                                </p>
                                                <div className="h6 fw-bolder">더보기</div>
                                                <div style={{ border: "1px solid black" }}></div>
                                                <div className="h6 fw-bolder">넷플릭스</div>
                                                <p className="text-muted mb-4">
                                                    신ㄴ청일 : 몇월 며칠
                                                    <br />
                                                    <a href="#!">계정 주소 press@domain.com</a>
                                                </p>
                                                <div className="h6 fw-bolder">더보기</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container px-5">
                    <h2 className="fw-bolder fs-5 mb-4">권민지님의 성향에 맞는 추가 구독 상품 추천</h2>
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src="https://www.shutterstock.com/image-photo/funny-red-welsh-corgi-pembroke-260nw-2042038094.jpg" alt="..." />
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">애견용품</div>
                                    <a className="text-decoration-none link-dark stretched-link" href="#!"><div className="h5 card-title mb-3">견생냥품</div></a>
                                    <p className="card-text mb-0">ㅁㅇㄴㅁ니리마림ㄴ림ㄴㅇ림나님니ㅏㅍ미ㅏㄴ퍼ㅡ니ㅏ퍼나ㅣ퍼니ㅏㅇ퍼니ㅏ펌나퍼밒나ㅓㅁ나퍼ㅣㅁㄴㅍ밒</p>
                                </div>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div className="d-flex align-items-end justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <div className="small">
                                                <div className="fw-bold">추가로 신청하기</div>
                                                <div className="text-muted">2023년 5월 12일까지 신청 시 할인! </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src="https://san.chosun.com/news/photo/202302/22412_82258_3814.jpg" alt="..." />
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">애견용품</div>
                                    <a className="text-decoration-none link-dark stretched-link" href="#!"><div className="h5 card-title mb-3">견생냥품</div></a>
                                    <p className="card-text mb-0">ㅁㅇㄴㅁ니리마림ㄴ림ㄴㅇ림나님니ㅏㅍ미ㅏㄴ퍼ㅡ니ㅏ퍼나ㅣ퍼니ㅏㅇ퍼니ㅏ펌나퍼밒나ㅓㅁ나퍼ㅣㅁㄴㅍ밒</p>
                                </div>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div className="d-flex align-items-end justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <div className="small">
                                                <div className="fw-bold">추가로 신청하기</div>
                                                <div className="text-muted">2023년 5월 12일까지 신청 시 할인! </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src="https://src.hidoc.co.kr/image/lib/2022/7/20/1658306424525_0.jpg" alt="..." />
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">애견용품</div>
                                    <a className="text-decoration-none link-dark stretched-link" href="#!"><div className="h5 card-title mb-3">견생냥품</div></a>
                                    <p className="card-text mb-0">ㅁㅇㄴㅁ니리마림ㄴ림ㄴㅇ림나님니ㅏㅍ미ㅏㄴ퍼ㅡ니ㅏ퍼나ㅣ퍼니ㅏㅇ퍼니ㅏ펌나퍼밒나ㅓㅁ나퍼ㅣㅁㄴㅍ밒</p>
                                </div>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div className="d-flex align-items-end justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <div className="small">
                                                <div className="fw-bold">추가로 신청하기</div>
                                                <div className="text-muted">2023년 5월 12일까지 신청 시 할인! </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-end mb-5 mb-xl-0">
                        <a className="text-decoration-none" href="#!">
                            추가 상품 더보기
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>

    )
}


export default Mypage_MJ;

