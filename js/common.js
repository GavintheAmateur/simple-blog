
export function insertFragment(htmlStr,rootElementSelector,position) {
    let loc = document.querySelector(rootElementSelector);
    loc.insertAdjacentHTML(position,htmlStr.trim());
}






