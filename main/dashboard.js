import {dashboardFun} from './dashboardFun.js';
function dashboardHtml(parentElementId) {
    return document.getElementById(parentElementId).innerHTML =`
    <h1 class="fw-bold fs-2">DASHBOARD</h1>
    <div class="container py-2">
    ${dashboardFun()}
    </div>
    `
}
export {dashboardHtml};