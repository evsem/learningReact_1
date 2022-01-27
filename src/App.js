import React, { useState } from 'react'
import './App.css'
import Form from './Components/Form/Form'
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

  //
  function createPost(newPost) {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      <Form create={createPost} />

      <List props_List={posts} />
    </div>
  )
}

export default App
