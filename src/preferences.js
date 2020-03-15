import { getPreferences } from './storage.js';

async function togglePreference(event) {
    const { name, checked } = event.target;
    await browser.storage.sync.set({ [name]: checked });
}

async function init() {
    // await browser.storage.sync.set(defaults);
    let preferences;
    try {
        preferences = await getPreferences();
    } catch (error) {
        preferences = defaults;
        console.error(error);
    }
    // console.log('Preferences:', preferences);
    
    document.querySelectorAll('input.option').forEach(e => {
        const name = e.name;
        const value = preferences[name];
        e.checked = value;
        e.addEventListener('change', togglePreference);
        e.removeAttribute('disabled');
    });
}

init();