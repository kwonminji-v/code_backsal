import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './(9)_Reducer';

export const store = configureStore({ reducer : counterReducer});