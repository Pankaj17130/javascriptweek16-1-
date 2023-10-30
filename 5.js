const urlPattern =/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig
function isValidURL(input) {
    return urlPattern.test(input);
}
const url="https://www.google.com/"
if(isValidURL(url)){
 console.log(`${url} is a valid url.`);
 }else{
    console.log(`${url} is not a valid URL.`);
 }

