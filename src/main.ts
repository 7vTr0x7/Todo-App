import "./style.css";

interface Todo {
  title: string;
  isComplete: boolean;
  readonly index: string;
}

const todos: Array<Todo> = [];
console.log(todos);

const todosContainer = document.querySelector(
  ".todoContainer"
) as HTMLDivElement;

const todoInput = document.getElementById("todoInput") as HTMLInputElement;

const myForm = document.getElementById("myForm") as HTMLFormElement;

console.log(todoInput.value);

myForm.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();

  const todo: Todo = {
    title: todoInput.value,
    isComplete: false,
    index: String(Math.random() * 100),
  };

  todos.push(todo);
  renderTodos(todos);
};

const generateTodoItem = (title: string, isComplete: boolean, id: string) => {
  const todo: HTMLDivElement = document.createElement("div");
  todo.className = "todo";

  // checkbox
  const checkBox: HTMLInputElement = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.className = "isCompleted";
  checkBox.checked = isComplete;
};

const renderTodos = (todos: Todo[]) => {
  todos.forEach((item) => {
    generateTodoItem();
  });
};
