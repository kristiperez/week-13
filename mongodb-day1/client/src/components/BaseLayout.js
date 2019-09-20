import React from 'react'
import Footer from './Footer'
import Header from './Header'

function BaseLayout(props) {
    return (
        <div>
            <h2>Code Snippets</h2>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default BaseLayout