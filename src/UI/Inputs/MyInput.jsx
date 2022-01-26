import React from 'react'
import classes from './MyInput.module.css'

const MyInput = (props) => {
  return <input className={classes.my_input} {...props}></input>
}

export default MyInput
