import {depositeFun} from './depositeFun.js';
function depositeHtml(parentElementId) {
    return document.getElementById(parentElementId).innerHTML =`
    <h1 class="fw-bold fs-2">DEPOSITE</h1>
    <div class="container py-2">
    ${depositeFun()}
    </div>
    `
}
export {depositeHtml};