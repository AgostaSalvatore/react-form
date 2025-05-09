import { useState } from 'react'
const listItems = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
];

function App() {

  return (
    <>
      <div className="container">
        <h1>
          List Item
        </h1>
        <ul className="list-group mb-4">
          {listItems.map((item) => (
            <li key={item.id} className="list-group">
              {item.name}
            </li>
          ))}
          <form>
            <div className="input-group mt-5">
              <input type="text" className='form-control' placeholder='New Item' />
              <button className="btn btn-primary">Add</button>
            </div>
          </form>
        </ul>
      </div>
    </>
  )
}

export default App
