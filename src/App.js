import React, { useState } from 'react'
import './App.css'
import Item from './Components/Item/Item'
import List from './Components/List/List'
import MyButton from './UI/Buttons/MyButton'
import MyInput from './UI/Inputs/MyInput'

function App() {
  let [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'Programming language' },
    { id: 2, title: 'Python', body: 'Programming language' },
    { id: 3, title: 'Kotlin', body: 'Programming language' },
    { id: 4, title: 'Swift', body: 'Programming language' },
    { id: 5, title: 'PHP', body: 'Programming language' },
    { id: 6, title: 'Ruby', body: 'Programming language' },
    { id: 7, title: 'Java', body: 'Programming language' },
  ])

  function addNewPost(e) {
    e.preventDefault()
    setPosts([...posts, { ...param, id: Date.now() }])
    setParam('')
  }

  let [param, setParam] = useState({ title: '', body: '' })
  return (
    <div className="App">
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

      <List props_List={posts} />
    </div>
  )
}

export default App
