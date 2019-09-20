import React, {Component} from 'react'
import Footer from './Footer'
import Header from './Header'
import DisplayCart from './DisplayCart';


export class BaseLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <DisplayCart />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default BaseLayout