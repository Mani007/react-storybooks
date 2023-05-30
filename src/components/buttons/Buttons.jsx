import React from 'react'

function Buttons(props) {
  const {color = 'bg-grey-700', children,  ...rest} = props
  return (
    <button className={`${color}`}{...rest}>{children}</button>
  )
}

export default Buttons