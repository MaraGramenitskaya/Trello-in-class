import React from 'react'
import { useState } from 'react'

export default function App() {
  const [boards, setBoards] = useState([
    { id: 1, title: 'STARTED', items: [{ id: 1, title: 'react' }, { id: 2, title: 'vue' }, { id: 3, title: 'angular' }] },
    { id: 2, title: 'IN PROCESS' },
    { id: 3, title: 'FINISH' }
  ])
  // const [currentItem, setCurrentItem] = useState(null)
  // const [currentBoard, setCurrentBoard] = useState(null)
    const [input, setInput] = useState("")

    const addItem = () => {
    const item = { id: Date.now(), title: input }
    const newItem = [item, ...boards[0]["items"]]

    setBoards(boards.map(board => {
      if (board.id === 1) board.items === newItem;
      return board;
    }))
  }
  const submit = (e) => {
    e.preventDefault();
    addItem(input);
    setInput("");
  }
  const deleteItem = (board, item) => {
    const index = board.items.indexOf(item);
    board.items.splice(index, 1);
    setBoards(boards.map(b => {
      if (board.id === b.id) {
        return board;
      } return b;
    }))
  }

  return (
    <div className='App'>
      <form onSubmit={submit} >
        <input type="text" placeholder='TODO' value={input} onChange={e => setInput(e.target.value)} />
      </form>
      {
        boards.map(board =>
          <div className='board' key={board.id}>
            <h2>{board.title} </h2>

            {
              board.items.map(item =>
                <div className='item' key={item.id} draggable={true}>
                  <span>{item.title}</span>
                  <span className='x' onClick={() => deleteItem(board, item)}>x</span>
                </div>
              )
            }
          </div>

        )}
    </div>
  )
}
