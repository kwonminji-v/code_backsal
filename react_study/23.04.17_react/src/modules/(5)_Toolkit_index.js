import { combineReducers } from 'redux';
import goodsReducer from './goodsCounter';
import stockReducer from './stockCounter';

const rootReducer = combineReducers({
    goodsReducer,
    stockReducer
});

export default rootReducer;

/* 
store를 생성하는 이유
상태 관리 : 애플리케이션의 상태를 저장하고, 필요한 곳에서 상태를 가져와 사용할 수 있도록 한다.
상태 변경 : 액션을 디스패치하여 상태를 변경하고, 이를 애플리케이션 전체에 전파할 수 있도록 한다.
<Provider> 컴포넌트는 react-redux 라이브러리에서 제공하는 컴포넌트로, 생성된 저장소를 애플리케이션의 모든 컴포넌트에 전달해준다.
*/