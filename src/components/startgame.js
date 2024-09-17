import React from 'react'
import '../style.css'

function StartGame(props) {
  return (
    <div className='container'>
      <img src="https://png.pngtree.com/png-vector/20191030/ourmid/pngtree-playing-dice-vector-set-realistic-3d-illustration-of-two-white-dice-png-image_1895117.jpg" alt="" />
      
      <div className='mainpoint'>
      <h1>
        Dice Game
      </h1>

      <button onClick={props.toggle}>
        Play Game
      </button>
      </div>
    </div>
  )
}

export default StartGame
