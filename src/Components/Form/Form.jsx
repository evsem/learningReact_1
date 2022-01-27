import React, { useState } from 'react'
import MyButton from '../../UI/Buttons/MyButton'
import MyInput from '../../UI/Inputs/MyInput'

const Form = ({ create }) => {
  let [param, setParam] = useState({ title: '', body: '' })

  function addNewPost(e) {
    e.preventDefault()

    //Для того, чтобы данный пост(объект) добавить в массив постов, необходимо вызвать функцию-callback из родителя. Далее мы эту функцию прокидываем из родителя в дочерний комопнент в виде пропса, деструктурируем пропс в дочернем компоненте, вытаскимваем эту функцию и в неё передаём в качестве параметра новый пост(ранее созданный объект). Далее функция забирает этот пост и возвращает его в родитель, где мы его уже добавляем в массив постов с помощью setPosts.
    let newPost = {
      ...param,
      id: Date.now(),
    }

    //Передаём в саму функцию новый пост
    create(newPost)
    setParam({ title: '', body: '' })
  }

  return (
    <form className="form_wrapper">
      <MyInput
        type="text"
        placeholder="Title"
        value={param.title}
        onChange={(e) => setParam({ ...param, title: e.target.value })}
      />
      <MyInput
        type="text"
        placeholder="Body"
        value={param.body}
        onChange={(e) => setParam({ ...param, body: e.target.value })}
      />
      <MyButton onClick={addNewPost}>Add</MyButton>
    </form>
  )
}

export default Form
