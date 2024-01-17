import { transferReduser } from '../redusers/transferReduser';
import { legacy_createStore as createStore } from 'redux';

export const store = createStore(transferReduser);
