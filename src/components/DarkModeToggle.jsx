import React from 'react'

const DarkModeToggle = ({isDarkMode, onDarkModeClick}) => {
  return (
    <button onClick={onDarkModeClick}>
      {isDarkMode ? "ToggleLight" : "ToggleDark" } Mode
    </button>
  )
}

export default DarkModeToggle
