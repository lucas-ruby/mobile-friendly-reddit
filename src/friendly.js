const viewAllClassName = 'CommentTree__SeeFullBtn';

async function viewAll(node) {
    const button = node.querySelector(`button.${viewAllClassName}`);
    if (button) button.click();
}

const bodyObserver = new MutationObserver(async function(mutations, _observer) {
    for (const { addedNodes } of mutations) {
        for (const node of addedNodes) {
            if (node.classList.contains('CommentTree')) viewAll(node);
        }
    }
});


const targetNode = document.querySelector('#container .App .AppMainPage');
const config = { childList: true, attributes: false, subtree: true, characterData: false };
bodyObserver.observe(targetNode, config);

window.requestAnimationFrame(() => viewAll(document.body));