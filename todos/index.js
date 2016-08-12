const TODOS = [{
  message: 'asdsa'
}, {
  message: '12312'
}, {
  message: 'asdas'
}];

module.exports = {
  addTodo: () => {
    console.log('inside func addTodo');

    TODOS.push({
      message: 999
    });
  },

  getTodos: () => {
    console.log('inside func getTodos', TODOS);

    return TODOS;
  },

  updateTodo: () => {

  }
}
