// import styled, {css} from "styled-components";
// import { Link } from 'react-router-dom';
// import palette from "../../lib/styles/palette";

// const SubInfoBlock = styled.div`
// ${props => 
// props.hasMarginTop &&
// css`
// margin-top: 1rem;`
// }
// color : ${palette.gray[6]};

// span + span:before{
//     color: ${palette.gray[4]};
//     padding-left: 0.25rem;
//     padding-right: 0.25rem;
//     content: '\\B7';
// }
// `;

const SubInfo = ({publishedDate}) => {  
    return (
        <div>
            <span>{new Date(publishedDate).toLocaleDateString()}</span>
        </div>
    );
};
export default SubInfo;

