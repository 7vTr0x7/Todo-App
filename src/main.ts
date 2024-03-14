import "./style.css";

interface Todo {
  title: string;
  isComplete: boolean;
  readonly index: string;
}

const todos: Array<Todo> = [];

const todosContainer = document.querySelector(
  ".todoContainer"
) as HTMLDivElement;

const todoInput = document.getElementById("todoInput") as HTMLInputElement;

const myForm = document.getElementById("myForm") as HTMLFormElement;

const btn = document.getElementById("btn") as HTMLButtonElement;

btn.onclick = myForm.submit;

myForm.onsubmit = (e) => {
  e.preventDefault();
};
