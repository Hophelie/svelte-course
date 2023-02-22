import { writable } from 'svelte/store';
// On créé des settings par defaut
const defaultSettings = {
  colorScheme: 'dark',
  language: 'en',
  fontSize: 12
};

function createSettingsStore() {
    // on override les methodes de base de writable 
  const { subscribe, set, update } = writable({ ...defaultSettings });
//   on créer des methodes custome comme toggleColorScheme qui gère le darkmode
  return {
    subscribe,
    set,
    update,
    updateSetting: (setting, value) => {
      update((settings) => ({ ...settings, [setting]: value }));
    },
    toggleColorScheme: () => {
      update((settings) => ({
        ...settings,
        colorScheme: settings.colorScheme === 'dark' ? 'light' : 'dark'
      }));
    },
    reset: () => {
      set({ ...defaultSettings });
    }
  };
}

export default createSettingsStore();
