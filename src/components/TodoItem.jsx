export const TodoItem = ({ todo }) => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
      <span className='allign-self-center'> {todo.description}</span>
      <button className='btn btn-danger'> Borrar </button>

    </li>
  )
}