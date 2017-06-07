export default function middlewareFactory(errorHandler) {
  return store => next => (action) => {
    if (action.payload instanceof Error || (action.payload && action.payload.error)) {
      errorHandler(action.payload, store.getState, action, store.dispatch);
      if (action.payload instanceof Error) {
        return action.payload;
      }
      return next(action);
    }
    return next(action);
  };
}
