import React from 'react'
import axios from 'axios'
import { useEffect } from 'react' 

//axios 관련 자료 참고 사이트 첨부 : https://inpa.tistory.com/entry/AXIOS-%F0%9F%93%9A-%EC%84%A4%EC%B9%98-%EC%82%AC%EC%9A%A9

export default function Product() {
    useEffect(() => {
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
            //console.log(res.json())  pending이 된다.
            return res.json()
            })
        .then(data => {
            console.log(data)

        })
    }, [])
  return (
    <div>Product</div>
  )
}
