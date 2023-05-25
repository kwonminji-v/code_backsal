import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "../css/jw_addCart.module.css";
import {
  addCartbtn1Rdc,
  getKeyConvertJSRdc,
  totalPriceRdc,
  discountRdc,
} from "../data/jw_data";
import contentsSelect from "../additional_features/jw_contentsSelect";
import sessionStorage from "../additional_features/jw_sessionStorage";
import comma from "../additional_features/jw_amount_notation";

let [a, c, t, d] = [[], [], 0, 0];

function Addcart(props) {
  const data = useSelector((store) => store.dataSet),
    btnCount = data.btnCount,
    contentsData = data.contentsData,
    dispatch = useDispatch(),
    [expectedPrice, setExpectedPrice] = useState(0);

  useEffect(() => {
    setExpectedPrice(
      Math.round(
        (1 - (props.totalPrice - props.discount) / props.totalPrice) * 100
      )
    );
  },[props.totalPrice]);

  function cartDisplay() {
    dispatch(addCartbtn1Rdc(btnCount));
  }
  function deleteFn(e) {
    const resultData = contentsData.find((x) => x.id === e.target.id);
    [a, c, t, d] = contentsSelect(contentsData, resultData, e);

    dispatch(getKeyConvertJSRdc(sessionStorage(a)));
    dispatch(totalPriceRdc(t));
    dispatch(discountRdc(d));
    // dispatch(onOffRdc(onOff))
  }

  // console.log('addCart rendering..')
  return (
    <div
      style={btnCount ? { height: "60px" } : null}
      className={style.container}
    >
      <div className={style.header}>
        구독 장바구니
        <i
          onClick={cartDisplay}
          className={
            btnCount ? `fa-solid fa-chevron-down` : "fa-solid fa-chevron-up"
          }
        ></i>
      </div>
      {btnCount ? (
        ""
      ) : (
        <div className={style.main}>
          <div className={style.addedContent}>
            담은상품<pre> </pre>
            <span>{props.getKeyConvertJS.length}</span>
          </div>
          <div className={style.amountsOfContentsIs5}>
            한번에 5개까지 신청할 수 있어요
          </div>
          <div className={style.asdf}>
            {/* 여기서부터 선택한 컨텐츠 */}
            <ul>
              {props.getKeyConvertJS.map((value, index) => {
                return (
                  <li key={value.id}>
                    <div className={style.contentArea}>
                      <div
                        id={value.id}
                        onClick={deleteFn}
                        className={style.xBtn}
                      >
                        x
                      </div>
                      <div className={style.content}>
                        <img src={value.url} alt="" />
                        <div>{value.title}</div>
                        <div>정가 월 {comma(value.price)}</div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* 여기까지 */}
          {/* <div style={{ height: '200px' }}></div> */}
          <div className={style.normalPay}>
            <div>정상 구독료</div>
            <div>월 {comma(props.totalPrice)}원</div>
          </div>
          <div className={style.discount}>
            <div>할인</div>
            <div>- {comma(props.discount)}원</div>
          </div>
          <div className={style.totalPay}>
            <div>예상 구독료</div>
            <div>
              <div>
                {expectedPrice === NaN ? "" : expectedPrice + "%" }
              </div>
              <div>월 {comma(props.totalPrice - props.discount)}원</div>
            </div>
          </div>
          <Link><div className={style.confirmBtn}>구독 신청하기</div></Link>
        </div>
      )}
    </div>
  );
}

export default Addcart;
