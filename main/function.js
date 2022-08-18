function valueCarrier(inputId,CurrentValue) {
    let value=parseInt(document.getElementById(inputId).value);
    if(value>CurrentValue){
        return undefined;
    }else{
        return value;
    }
}
function valueImplimentor(parentId,value) {
    document.getElementById(parentId).innerText = value;
}
function totalValueChange(totalMal) {
    document.getElementById("totalmalCarrier").innerHTML=totalMal
}
export {valueCarrier,valueImplimentor,totalValueChange};