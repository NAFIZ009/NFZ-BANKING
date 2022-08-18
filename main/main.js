import {dashboardHtml} from './dashboard.js';
import {depositeHtml} from './deposite.js';
import {withDrawHtml} from './withDraw.js';
import {profileHtml} from './profile.js';
function navCustom(joinElement) {
    if(!joinElement.classList.contains('nav-custom')){
        joinElement.classList.add('nav-custom');
        let navParent=document.getElementById("links-items");
        for (const items of navParent.children) {
            if(items==joinElement){
                continue;
            }else{
                items.classList.remove('nav-custom');
            }
        }
    }
}


document.getElementById('dashboard-nav').addEventListener('click', function(e) {
    dashboardHtml('main-body');
    navCustom(e.target);
});
document.getElementById('deposite-nav').addEventListener('click', function(e) {
    depositeHtml('main-body');
    navCustom(e.target);
});
document.getElementById('withdraw-nav').addEventListener('click', function(e) {
    withDrawHtml('main-body');
    navCustom(e.target);
});
document.getElementById('profile-nav').addEventListener('click', function(e) {
    profileHtml('main-body');
    navCustom(e.target);
});