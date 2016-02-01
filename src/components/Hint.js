import React from 'react'

export default function(props) {
  return (
    <div className="hint">
      {props.hintList[props.index]}
    </div>
  )
}