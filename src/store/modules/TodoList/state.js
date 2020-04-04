import { generateHash } from '@helpers'

const INITIAL_STATE = {
  tasks: [
    {
      name: 'New Task',
      hash: generateHash(),
      completed: false
    },
    {
      name: 'Completed Task',
      hash: generateHash(),
      completed: true
    }
  ]
};

export default INITIAL_STATE
