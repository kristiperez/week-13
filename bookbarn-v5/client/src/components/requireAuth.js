import React, { Component } from 'react';
import { connect } from 'react-redux'

// higher order component which takes in another component

export default function(ComposedComponent) {
    
    class Authenticate extends Component {
        constructor(props) {
            super(props)

            if(!this.props.isAuthenticated) {
                this.props.history.push('/')
            }
        }

        render() {

            return (
                <ComposedComponent {...this.props} />
            )
        }
    }

    const mapStatetoProps = (state) => {
        return {
            // if using only one router would be
            // isAuthenticated: state.isAuthenticated
            // below you have to tell it which reducer to use since more than 1.
            isAuthenticated: state.authRed.isAuthenticated

        }
    }

    return connect(mapStatetoProps)(Authenticate)

}
