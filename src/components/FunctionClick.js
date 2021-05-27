import React from 'react'

const FunctionClick = () => {
  function clickHandler() {
    console.log('Button clicked')
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
      <button onClick={() => clickHandler()}>Click 2</button>
    </div>
  )
}
export default FunctionClick