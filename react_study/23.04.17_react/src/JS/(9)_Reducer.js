const initialState = { count: 0 };

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

/* 
JSX(JavaScript XML)는 Facebook이 개발한 React 라이브러리에서 사용되는 문법 확장이다.
JSX는 JavaScript 내에서 HTML과 유사한 구문을 작성할 수 있게 해주며, 이를 통해 UI구조를 쉽게 정의할 수 있다.

*/