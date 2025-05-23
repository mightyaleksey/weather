import * as React from 'react'
import shallowequal from 'shallowequal'

export const StoreContext = React.createContext(null)

export function connect (mapStateToProps, mapDispatchToProps) {
  return connectComponent

  function connectComponent (Component) {
    ConnectedComponent.displayName = `Connected(${Component.name})`
    return ConnectedComponent

    function ConnectedComponent (props) {
      const store = React.useContext(StoreContext)
      const [state, setState] = React.useState(
        mapStateToProps(store.getState())
      )

      React.useEffect(() => {
        const unsubscribe = store.subscribe(() => {
          const nextState = mapStateToProps(store.getState())
          setState(
            prevState => shallowequal(state, nextState)
              ? prevState
              : nextState
          )
        })

        return unsubscribe
      }, [store])

      const handlers = typeof mapDispatchToProps === 'function'
        ? mapDispatchToProps(store.dispatch)
        : null

      return (
        <Component {...props} {...state} {...handlers} />
      )
    }
  }
}
