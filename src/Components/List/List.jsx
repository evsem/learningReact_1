import React from 'react'
import Item from '../Item/Item'
import classes from './List.module.css'

const List = ({ props_List }) => {
  return (
    <div className={classes.list_wrapper}>
      {props_List.map((post, index) => (
        <Item props_Item={post} number={index + 1} key={props_List.id} />
      ))}
    </div>
  )
}

export default List
