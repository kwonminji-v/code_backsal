npm install @reduxjs/toolkit

import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './reducer';

export const store = configureStore({ reducer: counterReducer });

@reduxjs/toolkit은 Redux의 공식 도구 모음으로, 
Redux 애플리케이션 개발을 더 쉽고 효율적으로 만들기 위해 고안되었습니다. 
이 툴킷은 일반적인 Redux 사용 사례를 단순화하고, 상용구 코드를 줄이며, 
더 간결한 코드를 작성할 수 있도록 도와줍니다.

@reduxjs/toolkit의 주요 기능은 다음과 같습니다.

configureStore: Redux 스토어를 설정하고 생성하는 함수입니다. 
이 함수는 여러 middleware를 자동으로 설정하고, 
개발 모드에서 Redux DevTools와 함께 작동합니다.

createSlice: 리듀서와 액션을 동시에 생성하는 함수입니다. 
이 함수는 액션 타입과 리듀서 로직을 결합하여 코드를 줄이고 관리가 쉬운 구조를 만들어 줍니다.

createAction: 액션 생성자를 만드는 함수입니다. 
이 함수를 사용하면 액션 타입과 payload를 자동으로 생성할 수 있습니다.

createReducer: 리듀서를 만드는 함수입니다. 
이 함수는 Immer 라이브러리를 사용하여 불변성을 처리하기 쉽게 해주고, 
리듀서 코드를 더 간결하게 만들어 줍니다.

createAsyncThunk: 비동기 작업을 처리하는 Thunk 함수를 생성하는 함수입니다. 
이 함수는 요청 상태(pending, fulfilled, rejected)에 따른 액션을 자동으로 발행합니다.

@reduxjs/toolkit을 사용하면, 
Redux 애플리케이션 개발에 필요한 상용구 코드를 대폭 줄이고, 
코드 가독성과 유지 관리를 개선할 수 있습니다. 
이 툴킷은 현재 Redux 개발의 기본이 되며, 공식 문서에서도 권장됩니다.