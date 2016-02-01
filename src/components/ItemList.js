import React from 'react'
import Item from './Item'

export default function(props) {
  return(
    <div className="itemList">
      {props.items.map((item, index) => 
        <Item {...item}
          key={index} 
          onClick={() => props.onItemClick(index)}/>
      )}
    </div>
  )
} 