import {profileFun} from './profileFun.js';
function profileHtml(parentElementId) {
    return document.getElementById(parentElementId).innerHTML =`
    <h1 class="fw-bold fs-2">PROFILE</h1>
    <div class="container py-2">
    ${profileFun()}
    </div>
    `
}
export {profileHtml};