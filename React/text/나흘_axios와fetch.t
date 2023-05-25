axios와 fetch는 모두 네트워크 요청을 보내는 JavaScript 함수입니다. 
그러나 둘은 몇 가지 차이점이 있습니다.

axios는 Promise 기반으로, fetch는 Promise 기반 + Response 객체를 반환합니다.
axios는 Promise를 기반으로하며, API 응답을 반환하는 data 속성이 있는 응답 객체를 반환합니다. 
fetch도 Promise를 기반으로하며, Response 객체를 반환하지만, 
이 Response 객체는 응답에 대한 메타데이터와 함께 HTTP 응답 본문(body)에 대한 정보를 제공합니다.

axios는 HTTP 요청 및 응답에 대한 인터셉터를 제공하며, 
fetch는 기본적으로 인터셉터를 제공하지 않습니다.
axios는 HTTP 요청과 응답에 대한 인터셉터를 제공하여, 
요청 및 응답에 대한 추가 구성 및 처리를 수행할 수 있습니다. 
fetch는 기본적으로 인터셉터를 제공하지 않으며, 사용자가 직접 HTTP 요청을 구성해야 합니다.

axios는 브라우저와 Node.js 모두에서 사용할 수 있습니다. 
fetch는 브라우저에서만 사용할 수 있으며, Node.js에서는 Polyfill을 사용하여 사용할 수 있습니다.
axios는 브라우저와 Node.js 모두에서 사용할 수 있습니다. 
fetch는 브라우저에서만 사용할 수 있으며, 
Node.js에서는 node-fetch와 같은 Polyfill을 사용하여 사용할 수 있습니다.

axios는 구성을 위해 설정 객체를 사용하며, fetch는 요청 구성에 URL 및 옵션 객체를 사용합니다.
axios는 설정 객체를 사용하여 기본 URL, 요청 메서드, 헤더 및 기타 구성 옵션을 지정할 수 있습니다. fetch는 URL과 옵션 객체를 사용하여 기본 URL, 요청 메서드, 헤더 및 기타 구성 옵션을 지정할 수 있습니다.

결론적으로, axios와 fetch 모두 네트워크 요청을 보내는 기능을 가지고 있으며, 각각의 특징에 따라 선택하여 사용할 수 있습니다. axios는 보다 사용하기 쉽고 유연한 API를 제공하며, fetch는 기본적으로 브라우저 내장 함수이기 때문에 브라우저 환경에서는 fetch를 사용하는 것이 유용할 수 있습니다.

import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export default function Product() {
    useEffect(()=>{
        axios.get('http://test.api.weniv.co.kr/mall')
            .then(res => {
                console.log('axios')
                console.log(res)
                console.log(res.data)
            })
        fetch('http://test.api.weniv.co.kr/mall')
            .then(res => {
                console.log('fetch')
                console.log(res)
                // console.log(res.json()) // pending됩니다.
                return res.json()
            })
            .then(data => {
                console.log(data)
            })
    },[])
    return (
        <div>Product</div>
    )
}
// useEffect hook의 콜백 함수에서는 axios와 fetch 함수를 사용하여 
// http://test.api.weniv.co.kr/mall URL에 GET 요청을 보내고, 
// 요청 결과를 콘솔에 출력합니다.

// useEffect hook의 두 번째 인수로 빈 배열을 전달하고 있습니다. 
// 이렇게 하면 useEffect hook은 컴포넌트가 마운트될 때 한 번만 실행되고, 
// 컴포넌트가 언마운트될 때 정리(clean-up) 함수가 호출됩니다.

// 컴포넌트의 반환값으로는 <div>Product</div>을 반환하고 있습니다. 
// 이 코드는 컴포넌트가 마운트된 후 API를 호출하고 나면 Product이라는 텍스트를 화면에 보여줍니다.

// 위 코드에서는 API 호출 결과를 화면에 표시하지 않고, 콘솔에 출력하고 있습니다. 
// 만약 API 호출 결과를 화면에 표시하고 싶다면, 
// useEffect hook에서 상태(state)를 사용하여 API 호출 결과를 저장하고, 
// 이 값을 JSX 코드에서 출력해야 합니다.

axios는 다음과 같은 장점을 가지고 있습니다.

구성이 쉽습니다.
요청과 응답에 대한 인터셉터를 제공합니다.
브라우저와 Node.js에서 모두 사용할 수 있습니다.

반면에 fetch는 다음과 같은 장점을 가지고 있습니다.

브라우저에 기본 내장되어 있어서 별도의 라이브러리를 설치할 필요가 없습니다.
Promise를 기반으로 하기 때문에,
async/await과 함께 사용할 때 간결한 코드를 작성할 수 있습니다.