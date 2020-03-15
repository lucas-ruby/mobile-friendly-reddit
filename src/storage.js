export const defaults = {
    showAll: true,
    noAvatars: false,
    easySelect: false
};

export async function getPreferences() {
    return browser.storage.sync.get(defaults);
}