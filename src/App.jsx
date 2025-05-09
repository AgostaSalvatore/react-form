import { useState } from 'react';

const InitialItems = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];

function App() {
  const [newItem, setNewItem] = useState('');
  const [item, setItem] = useState(InitialItems);

  const addItem = (e) => {
    e.preventDefault(); //per non refreshare la pagina
    const items = newItem.trim(); //toglie gli spazi prima e dopo
    setItem([...item, items]); //operatore spread
    setNewItem(''); //andare a pulire la form
  }

  return (
    <>
      <div className="container">
        <h1 className='mb-3'>
          Item
        </h1>
        <ul className="list-group mb-4">
          {item.map((item, index) => (
            <li key={index} className="list-group-item bg-secondary">
              {item}
            </li>
          ))}
        </ul>
        <form onSubmit={addItem}>
          <div className="input-group mb-3">
            <input
              value={newItem}
              onChange={(e) => { setNewItem(e.target.value) }}
              type="text"
              className='form-control'
              placeholder='Nuovo Item' />
            <button className="btn btn-primary">Aggiungi</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
