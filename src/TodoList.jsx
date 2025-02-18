import { useReducer } from "react";

const initialState = [{
  id:"",
  name:"",
  completed: false,
}]


function reducer(state, action) {
  switch (action.type) {
    case 'add': {
      return [
        ...state,
        {
          id: Date.now(),
          name: action.name,
          completed: false,
        },
      ];
    }
   }
}


export default function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick(e){
    e.preventDefault();

    const { taskName } = e.target.elements;

    dispatch({
      type:'add',
      name: taskName.value,
    });
  }

  return (
    <>
      <h3>Todo List</h3>
      <form onSubmit={handleButtonClick}>
        <input name="taskName" placeholder="To do"/>
        <button type="submit">Add</button>

        <tbody>
            {state.map((todo, i) => {
              return (
                <tr key={i}>
                  <td>{todo.name}</td>
                </tr>
              );
            })}
        </tbody>

      </form>
    </>
  );
}
