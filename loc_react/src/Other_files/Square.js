import React from 'react'

const Square = ({val,chooseSquare}) => {
  return (
    // onclick will be the reStart function
    <div className="square" onClick={chooseSquare}>
        {val}
    </div>
  )
}

export default Square