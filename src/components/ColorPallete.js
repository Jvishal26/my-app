import React from 'react'

export default function ColorPallete() {
  const changeToBlue = () => {
    document.body.style.backgroundColor = 'blue'
  }
  const changeToRed = () => {
    document.body.style.backgroundColor = 'red'
  }
  const changeToYellow = () => {
    document.body.style.backgroundColor = 'yellow'
  }
  const changeToGreen = () => {
    document.body.style.backgroundColor = 'green'
  }
  return (
    <div>
      <button className="btn mx-1 py-2 rounded-circle" style={{backgroundColor: 'blue'}} onClick={changeToBlue}></button>
      <button className="btn mx-1 py-2 rounded-circle" style={{backgroundColor: 'red'}} onClick={changeToRed}></button>
      <button className="btn mx-1 py-2 rounded-circle" style={{backgroundColor: 'yellow'}} onClick={changeToYellow} ></button>
      <button className="btn mx-1 py-2 rounded-circle" style={{backgroundColor: 'green'}} onClick={changeToGreen}></button>
    </div>
  )
}
