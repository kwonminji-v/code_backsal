import { Link } from "react-router-dom"

function NotFound(){
    return(
        <div style={{marginTop:'150px',display:'flex', flexDirection:'column', alignItems:'center'}}>
        <i style={{fontSize:'300px', color:'red'}}class="fa-solid fa-x"></i>
        <div style={{fontSize:'40px',}}>404 NOT FOUND</div><br/>
        <Link style={{fontSize:'20px',color:'rgb(90,150,250)',textDecoration:'none'}} to='/'>back to home</Link>
        </div>
    )
}

export default NotFound