import React, { useEffect } from "react";
import WriteActionButtons from "../../components/write/WriteActionButtons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { writePost, updatePost } from "../../modules/write";

const WriteActionButtonsContainer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //useSelector는 리액트의 리덕스 스토어 관련 Hook중 하나이다. 이 Hook은 스토어의 상태값을 반환해주는 역할을 한다. 
    //useSelector를 사용한 함수에서 리덕스 스토어의 상태값이 바뀐 경우(버튼 클릭 등의 이벤트를 통해 액션이 실행되어 상태값이 변경된 경우) 
    //바뀐 스토어의 상태값을 다시 가져와 컴포넌트를 렌더링 시킨다.
    //Editor컴포넌트에서 새롭게 작성된 포스팅에서 title, body, onChangeField 값을 write로 받아와서
    //값이 변동됬을 시에 렌더링 시킨다. 
    const { title, body, tags, post, postError, originalPostId, category, postCount } = useSelector(({ write }) => ({
        title: write.title,
        body: write.body,
        tags: write.tags,
        category: write.category,
        post: write.post,
        postCount: write.postCount,
        postError: write.postError,
        originalPostId: write.originalPostId,
    }));

    //포스트 수정등록
    const onPublish = () => {
        //컴포넌트에서 originalPostId값이 존재하면 writePost 대신 updatePost 액션 생성함수가 실행되도록 처리
        //isEdit라는 props를 전달하여 originalPostId 값의 존재유무에 따라 버튼 이름을 수정 또는 등록으로 설정해주었음
        if (originalPostId) {
            dispatch(updatePost({ title, body, tags, id: originalPostId }));
            return;
        }
        dispatch(
            writePost({
                title,
                body,
                tags,
                category,
                postCount
            }),
        );
    };
    //취소
    const onCancel = () => {
        navigate(-1);
    };
    useEffect(() => {
        if (post) {
            const { _id, user } = post;
            navigate(`/@${user.username}/${_id}`);
        }
        if (postError) {
            console.log(postError);
        }
    }, [navigate, post, postError]);

    // useEffect() : [deps] 에 특정 값을 넣게 된다면, 
    // 컴포넌트가 처음 마운트 될 때에도 호출이 되고, 지정한 값이 바뀔 때에도 호출이 됩니다.
    // useEffect 안에서 사용하는 상태나 props 를 deps 에 넣지 않게 된다면 useEffect 에 
    // 등록한 함수가 실행 될 때 최신 props / 상태를 가르키지 않게 됩니다.

    return <WriteActionButtons
        onPublish={onPublish}
        onCancel={onCancel}
        isEdit={!!originalPostId} />;
}; //3개의 props를 전달


//성공 혹은 실패 시 할 작업
export default WriteActionButtonsContainer;