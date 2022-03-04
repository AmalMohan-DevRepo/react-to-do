import { useState } from 'react';
import TodoList from './components/TodoList';

/*This is my APP
  Things I am doing here
  - I have a state for input, to store the value entered into the input box
  - another state for storing the notes array
  - on click of add button get the input value and push it to the notes array
  - TodoList is the component that lists out all the entered notes
  - I am passing the notes array and the set state finctions as props so I can use it to implement the delete and edit functionality
*/
function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = () => {
    if (input.trim()) {
      const randomNo = Math.floor(Math.random() * 10000);
      setNotes([...notes, { id: randomNo, note: input }]);
      setInput("");
    }
  }
  return (
    <div className="container-fluid p-0">
      <h2 className="display-3 text-center m-2">To Do App</h2>
      <div className="w-100 d-flex flex-column align-items-center my-4">
        <div className="input-group mb-3 w-75 ">
          <input type="text" className="form-control bg-dark text-light" id="input-box" placeholder="Add Note" onChange={handleChange} value={input} aria-label="add note" aria-describedby="button-addon2" />
          <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleSubmit}><i className="bi bi-plus"></i></button>
        </div>
        <TodoList notes={notes} setNotes={setNotes} setInput={setInput} />
      </div>
    </div>
  );
}

export default App;
