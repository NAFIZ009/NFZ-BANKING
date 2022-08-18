import {withDrawFun} from './withDrawFun.js';
function withDrawHtml(parentElementId) {
    return document.getElementById(parentElementId).innerHTML =`
    <h1 class="fw-bold fs-2">WITHDRAW</h1>
    <div class="container py-2">
    ${withDrawFun()}
    </div>
    `
}
export {withDrawHtml};