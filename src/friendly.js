const defaults = {
    showAll: true,
    noAvatars: false,
    easySelect: false
};

async function getPreferences() {
    return browser.storage.sync.get(defaults);
}

const viewAllClassName = 'CommentTree__SeeFullBtn';

async function addPrefsToBody() {
    const preferences = await getPreferences();
    const args = Object.entries(preferences)
        .filter(([ _k, v ]) => v)
        .map(([ k, _v ]) => k.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase());
    console.log('Args:', args);
    document.body.classList.add(...args);
}

async function viewAll(node) {
    const button = node.querySelector(`button.${viewAllClassName}`);
    if (button) button.click();
}

window.requestAnimationFrame(() => addPrefsToBody());