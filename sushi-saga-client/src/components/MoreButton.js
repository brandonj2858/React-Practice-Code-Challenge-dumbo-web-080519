import React from 'react'

const MoreButton = (props) => {
    return <button onClick={(evt) => props.moreSushi() }>
            More sushi!
          </button>
}
//null
export default MoreButton
