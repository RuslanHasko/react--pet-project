const generateHash = () => {
  return '_' + Math.random().toString(36).substr(2, 9)
};

const isEmptyArray = ({ array = [] } = {}) => {
  return Array.isArray(array) && array.length === 0
};

export { generateHash, isEmptyArray }
