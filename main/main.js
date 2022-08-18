import {valueCarrier,valueImplimentor,totalValueChange}from './function.js';
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
let totalAmmount=1200;

document.addEventListener('DOMContentLoaded',function(e) {
    dashboardHtml('main-body');
    navCustom(document.getElementById('dashboard-nav'));
})
document.getElementById('brand-btn').addEventListener('click', function(e) {
    dashboardHtml('main-body');
    if (dPositeV!=document.getElementById("dashboarddepo").innerHTML) {
        if(dPositeV==undefined){
            document.getElementById("dashboarddepo").innerHTML=0;
        }else{
            document.getElementById("dashboarddepo").innerHTML=dPositeV;
        }
        
    }
    totalValueChange(totalAmmount);
    if (wIthV!=document.getElementById("dashboardwd").innerHTML) {
        if(wIthV==undefined){
            document.getElementById("dashboardwd").innerHTML=0;
        }else{
            document.getElementById("dashboardwd").innerHTML=wIthV;
            
        }
    }
    navCustom(document.getElementById('dashboard-nav'));
});
document.getElementById('dashboard-nav').addEventListener('click', function(e) {
    dashboardHtml('main-body');
    if (dPositeV!=document.getElementById("dashboarddepo").innerHTML) {
        if(dPositeV==undefined){
            document.getElementById("dashboarddepo").innerHTML=0;
        }else{
            document.getElementById("dashboarddepo").innerHTML=dPositeV;
        }
        
    }
    totalValueChange(totalAmmount);
    if (wIthV!=document.getElementById("dashboardwd").innerHTML) {
        if(wIthV==undefined){
            document.getElementById("dashboardwd").innerHTML=0;
        }else{
            document.getElementById("dashboardwd").innerHTML=wIthV;
            
        }
    }
    navCustom(e.target);
});
document.getElementById('deposite-nav').addEventListener('click', function(e) {
    depositeHtml('main-body');
    totalValueChange(totalAmmount);
    if (dPositeV!=document.getElementById("dAmmountShow").innerHTML) {
        if(dPositeV==undefined){
            valueImplimentor('dAmmountShow',0);
        }else{
            valueImplimentor('dAmmountShow',dPositeV);
        }
        
    }
    
    document.getElementById('dBtn').addEventListener('click', function(e) {
        dPositeV=valueCarrier('dInput',);
        valueImplimentor('dAmmountShow',dPositeV);

        totalAmmount+=dPositeV;
        totalValueChange(totalAmmount);
        // dPositeV=value;
    });
    navCustom(e.target);
});
document.getElementById('withdraw-nav').addEventListener('click', function(e) {
    withDrawHtml('main-body');
    totalValueChange(totalAmmount);
    if (wIthV!=document.getElementById("wAmmountShow").innerHTML) {
        if(wIthV==undefined){
            valueImplimentor('wAmmountShow',0);
        }else{
            valueImplimentor('wAmmountShow',wIthV);

        }
        
    }

    document.getElementById('wBtn').addEventListener('click', function(e) {
        wIthV=valueCarrier('wInput',totalAmmount);
        if(wIthV==undefined){
            document.getElementById('withdraw-warning').classList.remove('d-none');
        }else{
            valueImplimentor('wAmmountShow',wIthV);
            document.getElementById('withdraw-warning').classList.add('d-none');
            totalAmmount-=wIthV;
            totalValueChange(totalAmmount);
        }
        
        // wIthV=value;
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

