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
  },

  filterTodos(todos, showCompleted, searchText) {
    let filteredTodos = todos;

    // filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      let text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    // Sort todos with non completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1; // a before b
      } else if (a.completed && !b.completed) {
        return 1;
      }
      return 0;
    })

    return filteredTodos;
  }

};

export default TodoAPI;
