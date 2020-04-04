import { put, takeEvery, all } from 'redux-saga/effects';
import MODULE_NAMESPACE from '@store/modules/TodoList/namespace';

const GENERATORS = {
  createTask: function* ({ type = '', payload = {} } = {}) {
    try {
      yield put({ type, payload });
    } catch (error) {
      console.log(error);
    }
  },

  removeTask: function* ({ type = '', payload = {} } = {}) {
    try {
      yield put({ type, payload });
    } catch (error) {
      console.log(error);
    }
  },

  markTaskAsCompleted: function* ({ type = '', payload = {} } = {}) {
    try {
      yield put({ type, payload });
    } catch (error) {
      console.log(error);
    }
  }
};

const WATCHERS = {
  watchCreateTask: function* () {
    yield takeEvery(MODULE_NAMESPACE.ADD_TASK, GENERATORS.createTask)
  },

  watchRemoveTask: function* () {
    yield takeEvery(MODULE_NAMESPACE.REMOVE_TASK, GENERATORS.removeTask)
  },

  watchMarkTaskAsCompleted: function* () {
    yield takeEvery(MODULE_NAMESPACE.MARK_TASK_AS_COMPLETED, GENERATORS.markTaskAsCompleted)
  },
};

export default function* rootSaga() {
  yield all([
    WATCHERS.watchCreateTask(),
    WATCHERS.watchRemoveTask(),
    WATCHERS.watchMarkTaskAsCompleted()
  ])
};
