import React from 'react'
import MyButton from '../../UI/Buttons/MyButton'
import classes from './Item.module.css'

const Item = (props, number) => {
  return (
    <div className={classes.item_wrapper}>
      <div className={classes.item_textContainer}>
        <h3 className={classes.item_textContainer__title}>
          {props.number}. {props.props_Item.title}
        </h3>
        <p className={classes.item_textContainer__body}>
          {props.props_Item.body}
        </p>
      </div>

      <MyButton>Delete</MyButton>
    </div>
  )
}

export default Item
