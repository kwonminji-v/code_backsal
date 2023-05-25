import style from '../css/mj_mypage.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import HeaderContainer from '../components/common/HeaderContainer';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Accordion, Table } from 'react-bootstrap';



function Mj_mypage_month() {

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
                        <MonthPage user={user} />
                    </div>
                </div >
            </div>
        </>
    );
}



function MonthPage(props) {

    function getRandomDate(start, end) {
        const startDate = new Date(start).getTime();
        const endDate = new Date(end).getTime();
        const randomTimestamp = Math.random() * (endDate - startDate) + startDate;
        const randomDate = new Date(randomTimestamp);
        return randomDate;
    }


    const startDate = '2023-01-01';
    const endDate = new Date(); // 현재 날짜와 시간
    // { getRandomDate(startDate, endDate).toLocaleDateString() }
    //getRondomDate 함수를 이용해 설정된 startDate값과 endDate값을 불러온 후 년/월/일로 변환하여 출력한다.


    return (
        <div className={style.monthPage_box}>
            <Accordion defaultActiveKey={['0']} alwaysOpen >
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4>{props.user.username}님의 구독 서비스 현황</h4></Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <span>5월 구독 서비스 결제 현황</span>
                            <hr />
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Table hover className={style.monthTable_box}>
                                    <thead>
                                        <tr>
                                            <th>목록</th>
                                            <th>구독 서비스</th>
                                            <th>구독 내용</th>
                                            <th>구독 신청 날짜</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td ><img src="https://image.lguplus.com/static/pc-contents/images/pogg/20221207-113523-257-smDkUeeQ.png" alt="" /></td>
                                            <td>옵션 : 베이식 (동시접속 1명, HD화질)<br /><span><del>5% 월 9,900원</del></span><br />월 9,405원</td>
                                            <td>{getRandomDate(startDate, endDate).toLocaleDateString().slice(0, -1)} ~</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><img src="https://image.lguplus.com/static/pc-contents/images/pogg/20221207-011122-103-U7ZZUkUo.png" alt="" /></td>
                                            <td>월 구독권 (베이직)<br /><span><del>월 10.450원</del></span><br />5% 월 9,928원</td>
                                            <td>{getRandomDate(startDate, endDate).toLocaleDateString().slice(0, -1)} ~</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>이전 서비스 구독 현황</Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <span>2023년 이전 구독 서비스 구독 이력</span>
                            <hr />
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Table hover className={style.monthTable_box}>
                                    <thead>
                                        <tr>
                                            <th>목록</th>
                                            <th>구독 서비스</th>
                                            <th>구독 내용</th>
                                            <th>구독 신청 날짜</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td ><img src="https://image.lguplus.com/static/pc-contents/images/pogg/20221207-120012-670-TCPY3HyD.png" alt="" /></td>
                                            <td>월 정액권<br /><span>5%<del>월 9,900원</del></span><br />월 9,405원</td>
                                            <td>{getRandomDate(startDate, endDate).toLocaleDateString().slice(0, -1)}</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><img src="https://image.lguplus.com/static/pc-contents/images/pogg/20230327-044234-158-WVwns6aB.gif" alt="" /></td>
                                            <td>전자책 월 정기구독<br /><del>월 9,900원</del><br />5% 월 9,405원</td>
                                            <td>{getRandomDate(startDate, endDate).toLocaleDateString().slice(0, -1)}</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td><img src="https://image.lguplus.com/static/pc-contents/images/pogg/20221207-122849-858-UVoQckXh.png" alt="" /></td>
                                            <td>마음껏 듣기 월정액<br /><span><del>월 7,700원</del></span><br />5% 월 7,315원</td>
                                            <td>{getRandomDate(startDate, endDate).toLocaleDateString().slice(0, -1)}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}


export default Mj_mypage_month;

