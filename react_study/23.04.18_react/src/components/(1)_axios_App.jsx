import Product from './Product'
//npm i axios

function App() {
  return (
    <div className='App'>
        <h1>test2</h1>
        <Product/>
    </div>
  );
}

export default App;
/* 
axios 장점 및 특징 
- HTTP 메서드 지원
  1.axios.get(url, conf)
  1.axios.delete(url, conf)
  1.axios.post(url, data, conf)
  1.axios.put(url, data, conf)
  1.axios.patch(url, data, conf)
- 장점
  1.네트워크 상태 체크하여 상황에 따라 연결 여부 결정
  2.인증 지원
  3.보안토큰 지원
  4.직관적
*/