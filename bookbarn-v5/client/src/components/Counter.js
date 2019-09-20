import React from 'react'
import { connect } from 'react-redux' 
import * as actionCreators from '../store/actions/actionCreators'

function Counter(props) {
    
    const incrementCounter = () => {
        props.onIncrementCounter()
    }

    //render using return
    return (
        <div>
            <button onClick={() => incrementCounter()}>Increment</button>
        </div>
    );

}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.incrementCounter())
    }
}

export default connect(null,mapDispatchToProps)(Counter)