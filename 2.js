function generateRandomNumber() {
     return Math .floor(Math.random()*100);
}
function generateRandomNumberWithDelay(delayInSeconds) {
    console.log(`Generating radom number after dely of ${delayInSeconds} seconds.....`);
    let countdown=7;
    const countdownInterval=setInterval(()=>{
        console.log(`${countdown} second remaning..`);
        countdown--;
        if (countdown==0) {
            clearInterval(countdownInterval);
            const randomNumber=generateRandomNumber();
            console.log(`random number genarated: ${randomNumber}`);

        }
    },2000);
}
generateRandomNumberWithDelay(7)