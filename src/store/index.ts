import { createStore } from 'vuex';
import appSettings from './modules/app-settings';
import background from './modules/backgrounds'
import characters from '@/store/modules/characters';
import classes from '@/store/modules/classes';
import races from '@/store/modules/races';

export default createStore({
  modules: {
    appSettings,
    background,
    characters,
    classes,
    races
  }
});
