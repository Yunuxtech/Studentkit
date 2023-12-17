import React from 'react'

const Helmet = (props) => {
    document.title = 'StudentKit - '+ props.title
  return (
    <div className=''>{props.children}</div>
  )
}

export default Helmet