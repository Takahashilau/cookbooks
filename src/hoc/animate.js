import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

const animate = (WrappedComp) => {
  return class extends Component {
    render() {
      const SIR = 'animate__slideInRight'
      const SIL = 'animate__slideInLeft'
      const SOR = 'animate__slideOutRight'
      const SOL = 'animate__slideOutLeft'

      let enterActive = ''
      let exitActive = ''

      let { state, pathname } = this.props.location
      let {match} = this.props
      let from = state && state.from

      switch(true) {
        case from === '/home':
        case from === '/list' && pathname === '/detail':
          enterActive = SIR
          exitActive = SOL
          break
        case from === '/list' && pathname === '/home':
        case from === '/detail' && pathname === '/home':
        case from === '/detail' && pathname === '/list':
          enterActive = SIL
          exitActive = SOR
          break
        default:
          break
      }

      return (
        <CSSTransition
          in={!!match}
          timeout={600}
          classNames={{
            enter: "animate__animated",
            enterActive,
            exit: "animate__animated",
            exitActive
          }}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <WrappedComp {...this.props}></WrappedComp>
        </CSSTransition>
      )
    }
  }
}

export default animate