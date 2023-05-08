import React from 'react'

function TextBox({text}) {
  return (
    <div className="box-container">
        <div className="box-frame grid-center">
            <p className="box-text">{text}</p>
        </div>
        <div className="box-shadow"></div>
    </div>
  )
}

export default TextBox;