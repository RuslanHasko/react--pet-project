import { createStore, applyMiddleware, combineReducers } from 'redux';
import { all } from "redux-saga/effects";
import createSagaMiddleware from 'redux-saga';

import TodoListSaga from '@store/modules/TodoList/saga';
import TodoListReducer from '@store/modules/TodoList/reducer';

const reducers = combineReducers({
  TodoList: TodoListReducer
});

const sagas = function* () {
  yield all([
    TodoListSaga
  ]);
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);

export default store
