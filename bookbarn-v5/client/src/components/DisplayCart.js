import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import axios from 'axios';
import { withRouter } from 'react-router-dom'


function DisplayCart(props) {

    const handleMyBooks = () => {
       
        props.history.push('/my-books')
    }

    return (
        <div className="Counter">
        <Button variant="secondary">
        Cart <Badge variant="light">{props.ctr}</Badge>
        </Button>
        { props.authenticated ? <Button onClick={() => handleMyBooks()}>Get My Books</Button> : null }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        // state.REDUCER.globalstateproperty
        ctr: state.ctrRed.counter,
        authenticated: state.authRed.isAuthenticated
    }
}

export default connect(mapStateToProps)(withRouter(DisplayCart))
