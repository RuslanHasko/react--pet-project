import MODULE_NAMESPACE from '@store/modules/TodoList/namespace';

export default {
  addTask: ({ task = '' } = {}) => ({
    type: MODULE_NAMESPACE.ADD_TASK,
    payload: {
      task
    }
  }),

  removeTask: ({ hash = '' } = {}) => ({
    type: MODULE_NAMESPACE.REMOVE_TASK,
    payload: {
      hash
    }
  }),

  markTaskAsCompleted: ({ hash = '' } = {}) => ({
    type: MODULE_NAMESPACE.MARK_TASK_AS_COMPLETED,
    payload: {
      hash
    }
  })
}
