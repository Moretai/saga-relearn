import React, { Component } from 'react'
import { IntlProvider } from 'react-intl'
import { connect } from 'react-redux'
import cookie from 'react-cookie'
import { browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import * as testActions from 'actions/test'
import style from './style.css'

@connect(
  state => ({
    test: state.test
  }),
  dispatch => ({
    actions: bindActionCreators(testActions ,dispatch)
  })
)
export default class App extends Component {

  fnClick() {
    this.props.actions.testRequest()
  }

  render () {
    const { test } = this.props
    return (
      <IntlProvider locale="en">
        <div className={style.wrap}>
          {/* App Hellow WORLD */}
          {test.get('data')}
          <button onClick={this.fnClick.bind(this)}>Test It</button>
          {this.props.children}
        </div>
      </IntlProvider>
    )
  }
}
