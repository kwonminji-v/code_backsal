import { useState, useEffect } from "react";
import style from '../css/detail_hy.module.css'
import { useDispatch } from "react-redux";
import { detailListChange } from "../createSlice";

function Table() {

    return (
        <table className={style.left_side_table}>
            <thead>
                <tr>
                    <th>구분</th>
                    <th>1개월</th>
                    <th>3개월</th>
                    <th>6개월</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>1dc대</td>
                    <td>2대</td>
                    <td>4대</td>
                </tr>
                <tr>
                    <td>화질</td>
                    <td>HDdcs</td>
                    <td>FHD</td>
                    <td>UHD</td>
                </tr>
            </tbody>
        </table>
    );
}

function SideLeftBox() {

    return (
        <div className={style.left_side_box}>
            <div className={style.left_btn_box}>
                <button>상품 안내</button>
                <button>사용 방법</button>
                <button>상세 정보</button>
                <button>유의 사항</button>
            </div>

            <div className={style.left_content_box}>
                <div>
                    <div className={style.left_side_title}>
                        <h1>HOME 테리어</h1>
                        <p style={{ fontSize: "40px" }}>나만의 DIY 인테리어 ITEM</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Table />
                    </div>
                    <div className={style.left_side_img_box}>
                        <img src="//assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/enjoyOnTv/en.png" />
                        <div className={style.left_side_text}>
                            <h2>다양한 옵션들로 원하는 선택지를 골라보세요</h2>
                            <br />
                            <p>쉽게 접하지 못하는 독특한 인테리어 ITEM들이 월마다 편하게 디자인해보세요!</p>

                        </div>
                        <img src="//assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/watchEverywhere/en.png" />
                        <div className={style.left_side_text}>
                            <h2>1개의 디바이스가 아닌 많은 디바이스에서 시청하세요</h2>
                            <br />
                            <p>인터넷에 연결되어 있으면 스마트폰, 노트북, 태블릿, TV 등 언제든 원하는 콘텐츠를 즐길 수 있습니다.</p>
                        </div>
                        <div className={style.left_side_text}>
                            <img src="//assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/kids/ko.png" />
                            <h2>첫 구독 시 100% 화분 및 </h2>
                            <br />
                            <p>즐겨보는 콘텐츠를 간편하게 저장, 인터넷 없이도 끊김없이 즐길 수 있습니다.</p>
                        </div>
                        <div className={style.left_side_text}>
                            <img src="https://image.lguplus.com/static/pc-contents/images/pogg/20230411-053714-696-scFrDtWI.png" />
                            <h2>다운로드를 활용하여 오프라인으로도 시청하기</h2>
                            <br />
                            <p>즐겨보는 콘텐츠를 간편하게 저장, 인터넷 없이도 끊김없이 즐길 수 있습니다.</p>
                        </div>
                        <img src=" //assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/download/ko.png" />
                        <DetailInfo />
                    </div>
                </div>
            </div>
        </div>
    )
}

function SideRightBox() {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("http://localhost:4001/data")
            .then(response => response.json())
            .then(json => {
                setData(json);
                setIsLoading(value => !value)
            })
    }, []);
    console.log(isLoading)

    useEffect(() => {
        dispatch(detailListChange(data));
    }, [data]);
    // const detailList = useSelector(state => state.detailList)

    const detailList = data.find(x => x.id == "ID1");
    console.log(detailList)


    return (
        <>{isLoading ? <div className={style.right_side_box}>
            <div className={style.right_detailcontent}>
                <div>
                    <div className={style.right_detail_text}>
                        <b style={{ fontSize: "35px" }}>{detailList.title}</b>
                        <span><img src={process.env.PUBLIC_URL + '/icon_share.png'} /></span>
                    </div>
                    <button className={style.right_optionbtn}>{detailList.option}</button>
                    <div>
                        <div>
                            <small className={style.saleprice}>{detailList.price}</small><br></br>
                            <span className={style.percent}>5%</span>475원 할인
                            <button className={style.right_addbtn}>+ 담기</button>
                        </div>
                    </div>+
                </div>

            </div>
            <div className={style.right_detailbtn}>
                다른 구독 상품 보러가기
            </div>
        </div> : ""}
        </>
    )
}

function DetailInfo() {
    return (
        <div className={style.detail_footer_box}>
            <div className={style.detail_footer_text}>
                <ul>
                    <p>서비스 안내</p>
                    <li>가입일을 기준으로 매달 자동 결제되는 상품입니다.</li>
                    <li>서비스 이용을 위해 이용약관 및 개인정보 제공'에 동의해야 합니다.</li>
                </ul>
                <ul>
                    <p>서비스 대상</p>
                    <li>만 19세 이상 고객님만 가입이 가능합니다.</li>
                </ul>
                <ul>
                    <p>서비스 해지</p>
                    <li>해지 신청을 하더라도 다음 결제일 전 날까지 서비스를 계속 이용할 수 있습니다. 결제일이 되면 자동 해지됩니다.</li>
                    <li>가입하신 후 콘텐츠를 한 편도 시청하지 않고, 결제일로부터 7일안에 해지 신청하는 경우 전액 환불 받을 수 있습니다. 고객센터로 문의해주세요.</li>
                    <li>제휴사 사이트에서 해지하셨을 경우, 제휴사 사정으로 해지 표시가 실시간으로 되지 않는 점 양해 부탁드립니다. 이 경우, 정확한 이용 기간은 제휴사 사이트에서 확인해주세요.</li>
                </ul>
                <ul>
                    <p>유의사항</p>
                    <li>이미 가입하신 고객의 경우, 현재 이용 중인 계정으로는 가입할 수 없습니다. 이용권이 만료된 이후 신청해주세요.</li>
                    <li>해당 사이트에서 멤버십 옵션을 변경한 경우, 변경된 옵션으로 최종 적용됩니다.</li>
                    <li>이용에 관해 궁금한 점은 고객센터 help.gudok.com/ko 또는 00-1234-4567로 문의해주세요.
                        ※ 상담 가능 시간 : 매일 오전 8시 ~ 오후 8시
                    </li>
                </ul>
            </div>
        </div>
    )
}

export { Table, SideLeftBox, SideRightBox, DetailInfo };