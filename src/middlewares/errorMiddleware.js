export default function middlewareFactory(errorHandler) {
    return function(store) {
        return function(next) {
            return function(action) {
                if (
                    action.payload instanceof Error ||
                    (action.payload && action.payload.error)
                ) {
                    errorHandler(
                        action.payload,
                        store.getState,
                        action,
                        store.dispatch
                    )
                    if (action.payload instanceof Error) {
                        return action.payload
                    } else {
                        return next(action)
                    }
                }
                return next(action)
            }
        }
    }
}
