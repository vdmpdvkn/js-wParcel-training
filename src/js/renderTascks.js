import localStorage from './localStorageAPI';
import refs from './refs';

export function renderTask () {
    
const data = localStorage.initStorage();
    const markup =  data.map(el => `<li class="task-list-item">
      <button class="task-list-item-btn" data-id = ${el.id}>Удалить</button>
      <h3>${el.name}</h3>
     <p>${el.text}</p>
  </li>`).join('');
refs.taskList.innerHTML = markup;
//   refs.taskList.insertAdjacentHTML('beforeend', markup);
}
