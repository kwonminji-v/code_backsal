/* eslint-disable-line */
import { createAction, handleActions } from "redux-actions";
import createRequestSaga,
{ createRequestActionTypes } from "../lib/createRequestSaga";
import * as postsAPI from '../lib/api/posts'
import { takeLatest } from 'redux-saga/effects';
//createAction/ handleAction 정리할 것


const INITIALIZE = 'write/INITIALIZE'; //모든 내용 초기화
const CHANGE_FIELD = 'write/CHANGE_FIELD'; //특정 KEY값 바꾸기
const SET_ORIGINAL_POST = 'write/SET_ORIGINAL_POST';

const [
    WRITE_POST,
    WRITE_SUCCESS,
    WRITE_FAILURE,
] = createRequestActionTypes('write/WRITE_POST'); //포스트 작성

const [
    UPDATE_POST,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_FAILURE,
] = createRequestActionTypes('write/UPDATE_POST'); //포스트 수정

export const updatePost = createAction(
    UPDATE_POST,
    ({ id, title, body, tags }) => ({
        id,
        title,
        body,
        tags,
    })
)

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
    key,
    value,
}));

export const writePost = createAction(WRITE_POST, ({ title, body, tags, postCount, category }) => ({
    title,
    body,
    tags,
    postCount,
    category
}));


export const setOriginalPost = createAction(SET_ORIGINAL_POST, (post) => post);
//사가 생성

const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost);
const updatePostSaga = createRequestSaga(UPDATE_POST, postsAPI.updatePost);
export function* writeSaga() {
    yield takeLatest(WRITE_POST, writePostSaga);
    yield takeLatest(UPDATE_POST, updatePostSaga);

}

const initialState = {
    title: '',
    body: '',
    tags: [],
    category: '선택',
    post: null,
    postError: null,
    originalPostId: null,
};


const write = handleActions(
    {
        [INITIALIZE]: state => initialState, //initialState 를 넣으면 초기 상태로 바뀜
        [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value, //특정key값을 업데이트 
        }),
        [WRITE_POST]: state => ({
            ...state,
            //post와 postError 를 초기화
            post: null,
            postError: null,
        }),
        //포스트 작성 성공
        [WRITE_SUCCESS]: (state, { payload: post }) => ({
            ...state,
            post,

        }),
        //포스트 작성 실패
        [WRITE_FAILURE]: (state, { payload: postError }) => ({
            ...state,
            postError,
        }),
        [SET_ORIGINAL_POST]: (state, { payload: post }) => ({
            ...state,
            title: post.title,
            body: post.body,
            tags: post.tags,
            category: post.category,
            originalPostId: post._id,
        }),
        [UPDATE_POST_SUCCESS]: (state, { payload: post }) => ({
            ...state,
            post,
        }),
        [UPDATE_POST_FAILURE]: (state, { payload: postError }) => ({
            ...state,
            postError,
        }),
    },
    initialState,
)


export default write;