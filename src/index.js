/**
 * Створи список справ.
 * На сторінці є два інпути які має вводиться назва і текст задачі.
 * Після натискання на кнопку "Додати" завдання додається до списку #task-list.
 *
 * Розмітка картки задачі
 * <li class="task-list-item">
 *     <button class="task-list-item-btn">Удалить</button>
 *     <h3>Заголовок</h3>
 *     <p>Текст</p>
 * </li>
 *
 * У кожної картки має бути кнопка "Видалити", щоб можна було
 * прибрати завдання зі списку.
 * Список із завданнями має бути доступним після перезавантаження сторінки.
 */
import localStorage from './js/localStorageAPI';
// console.log(localStorage);
localStorage.initStorage();
localStorage.removeTask(3);
// localStorage.addTask({ id: 1, name: 'anna', text: 'task' });
// localStorage.addTask({ id: 2, name: 'anna', text: 'task' });
// localStorage.addTask({ id: 3, name: 'anna', text: 'task' });
// localStorage.addTask({ id: 4, name: 'anna', text: 'task' });
