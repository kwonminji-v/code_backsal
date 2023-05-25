import style from '../css/mj_mypage.module.css'
import { Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import HeaderContainer from '../components/common/HeaderContainer';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import comma from '../additional_features/jw_amount_notation';
import contentsSelect from '../additional_features/jw_contentsSelect';
import { getKeyConvertJSRdc, totalPriceRdc, discountRdc } from '../data/jw_data';
import sessionStorage from '../additional_features/jw_sessionStorage';

let [a, c, t, d] = [[], [], 0, 0];

function Mj_mypage() {

    const { user } = useSelector(({ user }) => ({ user: user.user }));

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
                        <Right_mypage_menu user={user} />
                    </div>
                </div >
            </div>
        </>
    );
}


function Right_mypage_menu(props) {

    const data = useSelector((store) => store.dataSet);
    const contentsData = data.contentsData;
    const dataBox = data.getKeyConvertJS;
    const dispatch = useDispatch();

    //const sessionStorage = window.sessionStorage;
    // const getKey = sessionStorage.getItem("key");
    // JSON으로 변환한 데이터를 "key" 값으로 저장
    // const choiceItem = JSON.parse(getKey)
    // 불러온 JSON 파일을 JS로 변환


    /* 
    1. 장바구니에 있는 아이템 목록을 세션 스토리지에 저장할 때 배열 형태로 저장
    2. UI에서 장바구니 비우기 버튼을 클릭할 때 해당 아이템의 인덱스를 받아온다
    3. 받아온 인덱스를 사용하여 UI에서 해당 아이템을 제거.
    4. 동시에 세션 스토리지에서도 해당 아이템을 제거
    5. 업데이트된 장바구니 데이터를 세션 스토리지에 다시 저장 
    */


    function deleteFn(e) {
        const resultData = contentsData.find((x) => x.id === e.target.id);
        [a, c, t, d] = contentsSelect(contentsData, resultData, e);

        dispatch(getKeyConvertJSRdc(sessionStorage(a)));
        dispatch(totalPriceRdc(t));
        dispatch(discountRdc(d));
    }


    let submitDay = new Date();


    const randomData = []

    for (let i = 0; i < 3; i++) {
        let useId = contentsData[i].id
        let randomId = "ID" + Math.floor(Math.random() * contentsData.length)

        let findData = contentsData.find((x) => x.id === useId);

        if (findData) {
            randomData.push(findData)
        }
    }


    return (
        <>

            {
                dataBox.length === 0 ? <BackToMain /> :


                    <div className={style.right_mypage_menu} style={{ marginTop: "80px" }}>
                        <section className="py-3 col-lg-8">
                            <div className="container px-5" style={{ padding: "0px", margin: "0px", width: "1240px" }}>

                                <h1 className="fw-bolder fs-5 mb-4">{props.user.username}님이 구독신청 하신 상품입니다.</h1>
                                { 
                                    dataBox.map((value, idx) => {
                                        return (
                                            <div className={`card border-0 shadow rounded-3 ${style.mj_cardStyle} `
                                            }>
                                                <div className="card-body">
                                                    <div className="row gx-0">
                                                        <div className="col-lg-6 col-lg-5">
                                                            <div className='p-md-4'>
                                                                <div className="mb-2" ><img src={value.url} className={style.mj_logo_img} alt="" /></div>
                                                                <div className="h2 fw-bolder"></div>
                                                                <p>{value.title}</p>
                                                                <p>{value.detail}</p>
                                                                <h6>{Math.round(
                                                                    (1 - (value.price - value.discount) / value.price) * 100) + "%"}할인</h6>
                                                                <h5>{comma(value.price)}원</h5>
                                                                <Button id={value.id} onClick={deleteFn} variant="outline-danger" style={{ fontSize: "12px", padding: "4px" }}>장바구니에서 비우기</Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })

                                }

                            </div>
                        </section >
                        <section className='py-5'>
                            <div className="container px-5">
                                <div className="row gx-5">
                                    <div className="col-xl-9">
                                        <h2 className="fw-bolder fs-5 mb-4">계정을 연결해주세요!</h2>
                                        <div className="mb-4">
                                            <div className="small text-muted">계정 연결 전까지는 구독료가 발생되지 않습니다.<br></br>
                                                신청일 이후 40일이 지나면 신청내역이 자동으로 삭제됩니다.</div>
                                        </div>
                                        {
                                            dataBox.map((value, idx) => {
                                                return (
                                                    <div className="col-xl-12">
                                                        <div className={`card-body p-4 border-0 shadow ${style.mj_cardStyle}`}>
                                                            <div className="d-flex h-100 align-items-center justify-content-center">
                                                                <div className="text-center">
                                                                    <div className="h6 fw-bolder">{value.title}</div>
                                                                    <p className="text-muted mb-4">
                                                                        {`신청일: ${submitDay.toLocaleDateString().slice(0, -1)}`}
                                                                        <br />
                                                                        <a href="#!">계정 주소 press@domain.com</a>
                                                                    </p>
                                                                    <button>계정 연결하기</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </section>


                        <section className="py-5">
                            <div style={{ width: '170%' }} className="container px-5">
                                <h2 className="fw-bolder fs-5 mb-4">{props.user.username}님께 추가로 추천드릴 상품입니다!</h2>
                                <div className="row gx-5">
                                    <div className="col-lg-4 mb-5">
                                        <div className="card h-100 shadow border-0">
                                            <div className="card-body p-4">
                                                <div className="badge bg-primary bg-gradient rounded-pill mb-2">애견용품</div>
                                                <a className="text-decoration-none link-dark stretched-link" href="/main"><div className="h5 card-title mb-3">ANF</div></a>
                                                <p className="card-text mb-0"><img src="https://image.lguplus.com/static/pc-contents/images/pogg/20221208-014603-302-KtUZml6h.jpg" style={{ width: '100%' }} />독캔 택1 구독권</p>
                                            </div>
                                            <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                                <div className="d-flex align-items-end justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div className="small">
                                                            <Link to='/main'><div className="fw-bold">추가로 신청하기</div></Link>
                                                            <div className="text-muted">{`${submitDay.toLocaleDateString().slice(0, -1)} 까지 신청 시 추가할인 !`}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-lg-4 mb-5">
                                        <div className="card h-100 shadow border-0">
                                            <div className="card-body p-4">
                                                <div className="badge bg-primary bg-gradient rounded-pill mb-2">여행</div>
                                                <a className="text-decoration-none link-dark stretched-link" href="/main"><div className="h5 card-title mb-3">캠핑의 하루</div></a>
                                                <p className="card-text mb-0"><img src="https://image.lguplus.com/static/pc-contents/images/pogg/20221207-011652-908-FnBx6roE.png" style={{ width: '100%' }} />캠지기 4종팩 구독권</p>
                                            </div>
                                            <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                                <div className="d-flex align-items-end justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div className="small">
                                                            <Link to='/main'><div className="fw-bold">추가로 신청하기</div></Link>
                                                            <div className="text-muted">{`${submitDay.toLocaleDateString().slice(0, -1)} 까지 신청 시 추가할인 !`}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mb-5">
                                        <div className="card h-100 shadow border-0">
                                            <div className="card-body p-4">
                                                <div className="badge bg-primary bg-gradient rounded-pill mb-2">OTT/뮤직</div>
                                                <a className="text-decoration-none link-dark stretched-link" href="/main"><div className="h5 card-title mb-3">지니뮤직</div></a>
                                                <p className="card-text mb-0"><img src="https://image.lguplus.com/static/pc-contents/images/pogg/20221207-122849-858-UVoQckXh.png" style={{ width: '96%' }} />지니뮤직 마음껏듣기 월정액</p>
                                            </div>
                                            <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                                <div className="d-flex align-items-end justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div className="small">
                                                            <Link to='/main'><div className="fw-bold">추가로 신청하기</div></Link>
                                                            <div className="text-muted">{`${submitDay.toLocaleDateString().slice(0, -1)} 까지 신청 시 추가할인 !`}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-end mb-5 mb-xl-0">
                                        <a className="text-decoration-none" href="/main">
                                            추가 상품 더보기
                                            <i className="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div >}
        </>
    )
}

function BackToMain(props) {
    return (
        <>
            <div style={{ height: "1000px" }}>
                <Card style={{ width: '800px', height: "500px", marginTop: "100px", marginLeft: "30px", marginBottom: "25px", padding: "10px" }}>
                    <Card.Body>
                        <Card.Title style={{ fontSize: '2rem' }}>다독에서 상품을 구독해보아요!</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">다양한 상품들이 님을 위해 준비되어 있어요!</Card.Subtitle>
                        <Card.Text>
                            <img src={process.env.PUBLIC_URL + '../../gifrBox.jpg'} style={{ width: '100%', padding: '15px' }} alt="" />
                        </Card.Text>
                        <Card.Text>
                            <span style={{ fontSize: "25px" }}>여러분께 가장 필요한 다양한 구독 서비스를</span> <b style={{ color: '#ffc107', fontSize: "35px" }}>다독</b> 에서 만나보세요!
                        </Card.Text>
                        <Card.Link href="/main">구독 상품 보러가기!</Card.Link>
                    </Card.Body>
                </Card>
            </div >
        </>
    )
}

export default Mj_mypage;

