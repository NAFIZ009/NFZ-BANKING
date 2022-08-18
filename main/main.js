import {valueCarrier,valueImplimentor}from './function.js';
import {dashboardHtml} from './dashboard.js';
import {depositeHtml} from './deposite.js';
import {withDrawHtml} from './withDraw.js';
import {profileHtml} from './profile.js';
// import {profileFun} from './profileFun.js';
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
let dPositeV;
let wIthV;
let dPositeBtnClick=0;
let wIthVBtnClick=0;

document.addEventListener('DOMContentLoaded',function(e) {
    dashboardHtml('main-body');
    navCustom(document.getElementById('dashboard-nav'));
})
document.getElementById('brand-btn').addEventListener('click', function(e) {
    dashboardHtml('main-body');
    navCustom(document.getElementById('dashboard-nav'));
});
document.getElementById('dashboard-nav').addEventListener('click', function(e) {
    dashboardHtml('main-body');
    if (dPositeV!=document.getElementById("dashboarddepo").innerHTML) {
        document.getElementById("dashboarddepo").innerHTML=dPositeV;
    }
    navCustom(e.target);
});
document.getElementById('deposite-nav').addEventListener('click', function(e) {
    depositeHtml('main-body');
    document.getElementById('dBtn').addEventListener('click', function(e) {
        let value=valueCarrier('dInput');
        valueImplimentor('dAmmountShow',value);
        dPositeV=value;
    });
    navCustom(e.target);
});
document.getElementById('withdraw-nav').addEventListener('click', function(e) {
    withDrawHtml('main-body');
    document.getElementById('wBtn').addEventListener('click', function(e) {
        let value=valueCarrier('wInput');
        valueImplimentor('wAmmountShow',value);
        wIthV=value;
    });
    navCustom(e.target);
});
document.getElementById('profile-nav').addEventListener('click', function(e) {
    profileHtml('main-body');
    navCustom(e.target);
    document.getElementById('dlt-acc').addEventListener('click', function(e) {
        alert("Sorry Our officer Is On Vacation So We Cant Delete Your Profile Right Now.Please Try It After Some Years");
    });
    document.getElementById('Sout-acc').addEventListener('click', function(e) {
        window.location.href ='../index.html';
    });
});
document.getElementById('signup-page-btn').addEventListener('click', function(e) {
    window.location.href ='../index.html';
});
document.getElementById('profile-page-btn').addEventListener('click', function(e) {
    profileHtml('main-body');
    navCustom(document.getElementById('profile-nav'));
});

