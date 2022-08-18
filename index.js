let logInInfo=[
    {
        id:"bankChor420",
        password:"420bankChor"
    }
]


function getInputValue(inputId) {
    return document.getElementById(inputId).value;
}


document.getElementById("logIn-btn").addEventListener("click", function(event){
    logInInfo.forEach(function(info){
        if (getInputValue("mail")==info.id && getInputValue("pass")==info.password) {
            window.location.href="main/main.html"
            document.getElementById("emailWarning").classList.add("d-none");
            document.getElementById("emailMissingWarning").classList.add("d-none");
            document.getElementById("passWarning").classList.add("d-none");
        }
        if (getInputValue("mail")!=info.id && getInputValue("mail")!="") {
            document.getElementById("emailWarning").classList.remove("d-none");
            document.getElementById("emailMissingWarning").classList.add("d-none");
        }else if(getInputValue("mail")==""){
            document.getElementById("emailMissingWarning").classList.remove("d-none");
            document.getElementById("emailWarning").classList.add("d-none");
        }
    
        if (getInputValue("pass")!=info.password && getInputValue("pass")!="") {
            document.getElementById("passWarning").classList.remove("d-none");
        }else if(getInputValue("pass")==""){
            document.getElementById("passWarning").classList.remove("d-none");
            document.getElementById("emailWarning").classList.add("d-none");
        }
    });

});


document.getElementById("signup-page-btn").addEventListener("click", function(e) {
    document.getElementById("left-side").classList.remove("col-md-5");
    document.getElementById("left-side").classList.add("col-md-7");
    document.getElementById("right-side").classList.remove("col-md-7");
    document.getElementById("right-side").classList.add("col-md-5");

    document.getElementById("order-left-side").style.order=2;
    document.getElementById("order-right-side").style.order=1;
    document.getElementById("signIn").classList.add("d-none");
    document.getElementById("signUp").classList.remove("d-none");

    document.getElementById("changing-p").innerText="For joininge with us please Signup";

    document.getElementById("signup-page-btn").classList.add("d-none");
})

document.getElementById("upLogin").addEventListener("click", function(e) {
    document.getElementById("left-side").classList.add("col-md-5");
    document.getElementById("left-side").classList.remove("col-md-7");
    document.getElementById("right-side").classList.add("col-md-7");
    document.getElementById("right-side").classList.remove("col-md-5");

    document.getElementById("order-left-side").style.order=1;
    document.getElementById("order-right-side").style.order=2;
    document.getElementById("signIn").classList.remove("d-none");
    document.getElementById("signUp").classList.add("d-none");

    document.getElementById("changing-p").innerText="LogIn to access your account";

    document.getElementById("signup-page-btn").classList.remove("d-none");
})

document.getElementById("register").addEventListener("click", function(e) {
    let id=getInputValue("name")+getInputValue("teliphone")[getInputValue("teliphone").length-2]+getInputValue("teliphone")[getInputValue("teliphone").length-1];
    logInInfo.push({id:id,
        password:getInputValue("password")
    })
    alert(`Your ID:${id}
PASSWORD:${getInputValue("password")}
Please LOGIN
    `)
});