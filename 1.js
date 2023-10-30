let input ="pw skills";
function reverseString(inputString) {
    return inputString.split("").reverse().join("");
}

function reverseWithDelay(inputString) {
    setTimeout(function(){
        let reversed =reverseString(inputString);
        console.log("Reversed string:"+ reversed);
    },2000);
}
reverseWithDelay(input);