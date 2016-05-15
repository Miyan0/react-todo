import $ from 'jquery';

const TodoAPI = {
  setTodos(todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
    // will return undefined
  },
  getTodos() {
    let stringTodos = localStorage.getItem('todos');
    let todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {
      // parse has failed
    }

    return $.isArray(todos) ? todos : [];
  }
};

export default TodoAPI;
