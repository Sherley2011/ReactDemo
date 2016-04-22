import React from 'react'
import { connect } from 'react-redux'
import routes from '../routes'

class RootPure extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="full-height">
                {routes}
            </div>
        )
    }
}

export default RootPure
