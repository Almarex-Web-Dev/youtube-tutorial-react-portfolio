export const reducer = (state, action) => {
  // sidebar functionality
  if (action.type === 'CLOSE_SIDEBAR') {
    return { ...state, showAside1: false }
  }
  if (action.type === 'OPEN_SIDEBAR') {
    return { ...state, showAside1: true }
  }
  // navbar functionality
  if (action.type === 'OPEN_NAVBAR') {
    return { ...state, openCloseNav1: true }
  }
  if (action.type === 'CLOSE_NAVBAR') {
    return { ...state, openCloseNav1: false }
  }
  throw new Error('The functionality is invalid')
}
