import { useState } from "react";

function OnScrollEvent(){

    const [headerStyle,setHeaderStyle] = useState(''),
          [btnMarginTop, setBtnMarginTop] = useState(document.documentElement.scrollTop + document.documentElement.clientHeight -100),
          [progressBar, setProgressBar] = useState(0);
    let window_Y = document.documentElement.scrollTop,
        scrollTop = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        progressBarWidth = (window_Y / scrollTop) * 100;

    window.onscroll=()=>{
        setBtnMarginTop(document.documentElement.scrollTop + document.documentElement.clientHeight - 100);
        setProgressBar(progressBarWidth)
        let scrollHeight = document.documentElement.scrollTop;
        if(scrollHeight>=250){
            setHeaderStyle(`boxShadow:'1px 1px 10px 1px gray'`)
        }
    }
    window.onresize = () => {
        setBtnMarginTop(document.documentElement.scrollTop + document.documentElement.clientHeight - 100)
    }
    return(
        {data:{headerStyle,btnMarginTop,progressBar}}
    )
}

export default OnScrollEvent;