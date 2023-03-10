import localStorage from './localStorageAPI';
import { dataCreate } from './dataCreate';

export function submitForm(evt) {
  evt.preventDefault();
  localStorage.addTask(dataCreate(evt));
  evt.currentTarget.reset();
}
