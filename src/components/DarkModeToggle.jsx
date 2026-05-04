import React from 'react'

const DarkModeToggle = ({dark, setDark}) => {
  return (
    <button onClick={() => setDark(prev => !prev)}>
      {dark ? "Switch to Light Mode": "Switch to Dark Mode"}
    </button>
  )
}

export default DarkModeToggle
