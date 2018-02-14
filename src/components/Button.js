import React from 'react'
import PropTypes from 'prop-types'

export default function Button (props) {
  let classList = 'button-reset sans-serif outline-0 fw6 f5 white br1 bw0 ph4 pv2'
  if (props.disabled) {
    classList += ' bg-gray-muted gray'
  } else {
    classList += ` bg-${props.color} hover-bg-${props.color}-muted white pointer`
  }

  return (
    <button
      className={classList}
      onClick={props.disabled ? undefined : props.onClick} >
      {props.children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

Button.defaultProps = {
  disabled: false,
  color: 'aqua'
}
