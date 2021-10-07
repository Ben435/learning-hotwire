const store = [
  {
    id: "1",
    content: "hello world!",
  },
  {
    id: "2",
    content: "Bonjour monde!",
  },
];

export function addTodo(newTodo) {
  store.push(newTodo);
}

export function getTodos() {
  return store;
}
