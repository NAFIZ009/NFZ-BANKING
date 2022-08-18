function valueCarrier(inputId) {
    let value=document.getElementById(inputId).value;
    return value;
}
function valueImplimentor(parentId,value) {
    document.getElementById(parentId).innerText = value;
}

export {valueCarrier,valueImplimentor};