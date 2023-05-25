import styled from "styled-components";
import Responsive from "../common/Responsive";
import Button from "../common/Button";
import palette from "../../lib/styles/palette";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";
import { Link } from 'react-router-dom'
import LeftMenu from "../common/LeftMenu";
import '../../App.css'
import { useSelector } from "react-redux";
import ModalJW from "../../component/jw_modal";

const PostListBlock = styled(Responsive)`
min-height:570px;
ul li{
    list-style-type: none;
    display : inline;
    padding-right: 40px;
}
ul {
    margin-top : 20px;
    margin-left : -30px;
    margin-bottom : -50px;
}
table{
    margin-bottom: 30px;
}

table thead {
    font-size: 18px;
    font-weight: bold;
}
.postcategory{
    margin-bottom:6px;
}
color : ${palette.gray[7]};
font-family : kakao;
margin-top : -58px;
margin-left : 500px;
`;

const WritePostButtonWrapper = styled.div`
display: flex;
justify-content: flex-end;
margin-bottom: 2rem;
`;

const PostItemBlock = styled.div`

padding-top: 10px;
padding-bottom : 10px;
&:first-child{
    padding-top:0;
}
& + &{
    border-top : 1px solid ${palette.gray[2]};
}

h2{
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
        color: ${palette.gray[6]};
    }
}
p{
    margin-top: 2rem;
}

tr td { 
    padding-right: 60px;
}
color : ${palette.gray[6]};
font-family : kakao;

`;




const PostItem = ({ post }) => {
    const { publishedDate, user, tags, title, _id, postCount, category } = post;

    return (

        <div className="tabletitle">
            <PostItemBlock>
                <tr>
                    <td style={{ width: '80px' }}>{postCount}</td>
                    <td style={{ width: '220px' }} >{category}</td>
                    <td style={{ width: '280px' }}><Link to={`/:${user.username}/${_id}`}>{title}</Link></td>
                    <td style={{ width: '180px' }}><Tags tags={tags} /></td>
                    <td style={{ width: '160px' }}>{user.username}</td>
                    <td style={{ width: '160px' }}><SubInfo publishedDate={new Date(publishedDate)} /></td>
                </tr>
            </PostItemBlock>
        </div>

    );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {
    // const [postlist, setPostlist] = useState(posts);
    // const changepostCategory =(event) => {
    //     const value = event.target.value;
    //     console.log(value)
    //     for(var i=0; i<10; i++){
    //         if(value === '전체'){
    //             setPostlist(posts);         
    //         } else {
    //            const selectedpostlist = posts.filter( (x) => x.category === value)
    //            console.log(selectedpostlist)
    //            setPostlist(selectedpostlist)
    //         }
    //     }
    // }
    const isModal = useSelector(store=>store.dataSet.modalOnOff),
    user = useSelector(({ user }) => ({ user: user.user }))
    if (error) {
        return <PostListBlock>에러가 발생했습니다.</PostListBlock>
    }
    return (
        <>{user.user===null && (isModal===true) ? <ModalJW visible={isModal}/> : ""}
            <div className="postleft"><LeftMenu /></div>
            <PostListBlock>
                <h2>문의 게시판</h2>
                <ul className="postcategory">
                    <li value="전체">전체</li>
                    <li value="구독 및 해지 관련 문의" >구독 및 해지 관련 문의</li>
                    <li value="구독 서비스 관련 문의" >구독 서비스 관련 문의</li>
                    <li value="입금 및 결제 문의">입금 및 결제 문의</li>
                    <li value="기타 문의" >기타 문의</li>
                </ul>
                <WritePostButtonWrapper>
                    {showWriteButton && (
                        <Button cyan to="/write">
                            새 글 작성하기
                        </Button>
                    )}
                </WritePostButtonWrapper>
                <table>
                    <thead>
                        <td style={{ width: '80px' }}>번호</td>
                        <td style={{ width: '220px' }}>카테고리</td>
                        <td style={{ width: '280px' }}>제목</td>
                        <td style={{ width: '180px' }}>태그</td>
                        <td style={{ width: '160px' }}>작성자</td>
                        <td style={{ width: '160px' }}>작성일</td>
                    </thead>
                </table>
                {/* 로딩 중이 아니고 포스트 배열이 존재할 때만 보여 줌 */}
                {!loading && posts && (
                    <div>
                        {posts.map(post => (
                            <PostItem post={post} key={post._id} />
                        ))}
                    </div>
                )}

            </PostListBlock>
        </>
    );
}

export default PostList;