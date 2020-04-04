import MODULE_NAMESPACE from '@store/modules/TodoList/namespace';
import MODULE_STATE from '@store/modules/TodoList/state';
import { generateHash } from '@helpers'

export default function(state = MODULE_STATE, { type = '', payload = {} } = {}) {
  switch (type) {
    case MODULE_NAMESPACE.ADD_TASK: {
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            name: payload.task,
            hash: generateHash(),
            completed: false
          }
        ]
      };
    }

    case MODULE_NAMESPACE.REMOVE_TASK: {
      return {
        ...state,
        tasks: state.tasks.filter(task => task.hash !== payload.hash)
      };
    }

    case MODULE_NAMESPACE.MARK_TASK_AS_COMPLETED: {
      return {
        ...state,
        tasks: [
          ...state.tasks.map(task => ({
            ...task,
            ...(task.hash === payload.hash && {
              completed: true
            })
          }))
        ]
      };
    }

    default: {
      return state;
    }
  }
}
