import React from 'react'

const Button = (props) => {

  const { children } = props;

  return (
    <button className="btn  btn-primary">{children}</button>
  )
};

export default App
