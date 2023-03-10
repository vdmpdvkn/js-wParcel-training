const TASK_KEY = 'tasks';

function initStorage() {
  try {
    if (localStorage.getItem(TASK_KEY)) {
      return JSON.parse(localStorage.getItem(TASK_KEY));
    }
    localStorage.setItem(TASK_KEY, JSON.stringify([]));
  } catch (error) {
    console.log(error);
  }
}

function addTask(task) {
  if (!task) {
    return;
  }
  const array = JSON.parse(localStorage.getItem(TASK_KEY));
  array.push(task);
  localStorage.setItem(TASK_KEY, JSON.stringify(array));
}

function removeTask(id) {
  const array = JSON.parse(localStorage.getItem(TASK_KEY));
  const newArray = array.filter(item => item.id !== id);
  localStorage.setItem(TASK_KEY, JSON.stringify(newArray));
}
export default { initStorage, addTask, removeTask };
