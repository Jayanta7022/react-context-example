import React, { useContext } from 'react'

function Button({children}) {
    const theme= useContext(themeContext)
    const className='button-'+theme

  return (
    <button className={className}>
        {children}
    </button>
  )
}

export default Button