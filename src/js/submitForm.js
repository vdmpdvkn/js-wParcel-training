import localStorage from './localStorageAPI';
import { dataCreate } from './dataCreate';
import {renderTask} from './renderTascks';

export function submitForm(evt) {
  evt.preventDefault();
  localStorage.addTask(dataCreate(evt));
  renderTask();
  evt.currentTarget.reset();
}
