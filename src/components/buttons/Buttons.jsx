import React from 'react'

function Buttons(props) {
  const {tailwind = 'bg-grey-700', children,  ...rest} = props
  return (
    <button className={`button ${tailwind}`}{...rest}>{children}</button>
  )
}

export default Buttons