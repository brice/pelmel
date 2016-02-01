import React from 'react'

export default function (props) {
  return (
    <div 
      className="item" 
      style={{
        textDecoration: props.choose ? 'line-trough' : 'none',
        cursor: props.choose  ? 'default' : 'pointer' 
      }}
      onClick={props.onClick}> 
      {props.libelle}
    </div>
  )
}