import React, { Component } from 'react'
import Header from '../../Header/Header'
import Api from './../../Api'
export default class Home extends Component {
  render() {
    return (
      <>
      <Header />
      <Api />
      </>
    )
  }
}
