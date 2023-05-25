import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap'
import { addItem } from "../store.js";
import { useDispatch } from "react-redux";


function Detail(props) {

    let { id } = useParams();
    let lostdog = props.dogs.find(x => x.id == id);
    let [count, setCount] = useState(0)
    let [alert, setAlert] = useState(true)
    let [tab, setTab] = useState(0)
    let dispatch = useDispatch()

    useEffect(() => {
        let a = setTimeout(() => { setAlert(false) }, 3000)
        console.log(1)
        return () => {
            console.log(2)
            clearTimeout(a)
        }
    }, [])

    console.log('안녕')
    console.log(id)
    return (
        <div className='container'>
            {
                alert == true ? <div className='alert alert-warning'>이 친구들에게 사랑을 나눠주세요 😆 </div> : null
            }

            {count}
            <button onClick={() => { setCount(count + 1) }}>1씩 올라가는 버튼</button>

            <div className='row'>
                <div className="col-md-6">
                    <img src={process.env.PUBLIC_URL + "../dog_" + (parseInt(id)) + ".jpg"} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{lostdog.title}</h4>
                    <p>{lostdog.content}</p>
                    <p>{lostdog.price}❤</p>
                    <button className="btn btn-danger" onClick={() => {
                        dispatch(addItem({ id: 1, name: '콩이', count: 1 }))
                    }}>입양하기</button>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-md-4">
                    <img src={process.env.PUBLIC_URL + "../dog_" + (parseInt(id)) + ".jpg"} width="100%" />
                </div>
                <div className="col-md-4">
                    <h4 className="pt-5">{lostdog.title}</h4>
                    <p>{lostdog.content}</p>
                    <p>{lostdog.price}❤</p>
                    <button className="btn btn-danger" onClick={() => {
                        dispatch(addItem({ id: 1, name: '콩이', count: 1 }))
                    }}>입양하기</button>
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={() => { setTab(0) }} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { setTab(1) }} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { setTab(2) }} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>



            <TabContent tab={tab} />

        </div>
    )
}

function TabContent({ tab }) {

    let [fade, setFade] = useState('');
    useEffect(() => {
        // setTImeout(()=>{ setFade('end') }, 100)
        let a = setTimeout(() => { setFade('end') }, 1000)//그담실행
        return () => {
            clearTimeout(a)
            setFade('')//먼저실행
        }
    }, [tab])

    return (

        <div className={'start ' + fade} style={{ width: "99vw", height: "25vh" }}>
            {[<div>내용 0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
        </div>
    )
}

export default Detail;