import React, { useContext } from 'react'
import Button from './Button';

function Panel({ title, children}) {
    const theme= useContext(themeContext)
    const className = 'panel-' + theme;
    return (
      <section className={className}>
        <h1>{title}</h1>
        {children}
      </section>
    )
  }

export default Panel