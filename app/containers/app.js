import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'


import * as userActions from '../actions/user'

class App extends React.Component{
    constructor() {
        super();
    }
    render() {
        const { user, actions } = this.props

        return (
          <div className="container">
            <section className="jumbotron">
              <h3 className="jumbotron-heading">hello,{user[0].name},Search Github Users</h3>
            </section>
          </div>
        )
    }
};

App.propTypes = {
    user: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  // console.log(state)
    return {user: state.user}
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
