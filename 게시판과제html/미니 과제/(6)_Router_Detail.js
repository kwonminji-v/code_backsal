
/*  npm install react-router-dom@6
    npm install react-router
    npm install styled-components */

import { useParams } from 'react-router-dom'

function Detail(props) {
    let { id } = useParams();
    return (
        <div className="container">
            {/* <Box>
            <YellowBtn bg = "orange"> 오렌지색 버튼임 </YellowBtn>
            <YellowBtn bg = "blue"> 파란색 버튼임 </YellowBtn> 
            </Box>  */}
            <div className='row'>
                <div className='col-md-6'>
                    <img src={process.env.PUBLIC_URL + "../dog_"+(parseInt(id) +1) + ".jpg"} width="100%" />
                </div>
                <div className='col-md-6 mt-4'>
                    {/* <h4 className="pt-5"> {props.shoes[0].title}</h4> */}
                    <h4 className='pt-5'>{props.shoes[id].title}</h4>

                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price} </p>

                    <button className='btn btn-danger'> 입양하기 </button>
                </div>
            </div >
        </div>
    )
}

export default Detail;e