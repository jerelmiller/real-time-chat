import { findDOMNode } from 'react-dom'
import { Component } from 'react'

export default class AutoScroll extends Component {
  componentWillUpdate() {
    const node = findDOMNode(this)
    this.shouldScroll = node.scrollTop + node.offsetHeight === node.scrollHeight
  }

  componentDidUpdate() {
    if (this.shouldScroll) {
      const node = findDOMNode(this)
      node.scrollTop = node.scrollHeight
    }
  }

  render() {
    return this.props.children
  }
}
