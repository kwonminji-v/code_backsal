import React from 'react'

export default function App() {
  const productList = {
    products: [{
      title : "개발자 무릎 담요",
      price: 17500,
      id: 101,
    },
    {
      title : "Hack Your Life 개발자 노트북 파우치",
      price: 29000,
      id: 102,
    },
    {
      title : "우당탕탕 누리호의 실험실 스티커북",
      price: 29000,
      id: 103,
    },
    {
      title : "버그를 Java라 버그잡는 누리씨 키링",
      price: 29000,
      id: 104,
    },
  ],
};

return (  //props로 전달하지 않고, 컴포넌트 내부에서 변수로 만든다.
<div>
      {productList.products.map((el, index) => {
        return (
          <div key={el.id}>
            {console.log(el.id)}
            <h2>{el.title}</h2>
            <p>{el.price}</p>
          </div>
        )
      })}
    </div>
  )
}
