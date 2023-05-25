import { useState } from 'react';

function ProgressBar() {
    let window_Y = document.documentElement.scrollTop,
    scrollTop = document.documentElement.scrollHeight - document.documentElement.clientHeight,
    progressBarWidth = (window_Y / scrollTop) * 100;
    const [progressBar, setProgressBar] = useState(0);

    window.onscroll=()=>{
        setProgressBar(progressBarWidth)
    }
    return (
        <div style={{ zIndex: '10', backgroundColor: 'rgb(90,180,255)', position: 'sticky', top: '0px', height: '5px', width: progressBar + "%" }}></div>
    )
}

export default ProgressBar;