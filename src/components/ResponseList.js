import React from 'react'
import Response from './Response'

export default function(props) {
  return (
    <div className="responseList">
      {props.response.map((response, index) =>
        <Response {...response} key={index} />
      )}
    </div>
  )
}