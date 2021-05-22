import React from 'react'

// function Greet(params) {
//     return <h1>Hello Pran !</h1> 
// }


// const Greet = () => {
//     return (
//         <h1>Hello Pran !</h1>
//     )
// }

const Greet = (props) => {
    return (
      <div>
        <h1>
          Hello {props.name} a.k.a {props.heroName}
        </h1>
      </div>
    )
  }

export default Greet;