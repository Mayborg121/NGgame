const minNum = 1 ;
const maxNum = 100 ;
let attempts = 0 ;
let running = true ;
const answer = Math.floor(Math.random()* (maxNum + minNum +1) + minNum);

let guess ;

while(running) {
    guess = window.prompt(`Guess Number between ${minNum} - ${maxNum} .`);
    attempts++;
    if(isNaN(guess)){
        window.alert("Please Enter a valid Number !!");
    }
    else if (guess > maxNum || guess < minNum){
        window.alert(`Guess Should be In Range ( ${minNum} - ${maxNum} )`);
    }
    else{
        if(guess > (answer+10)){
            window.alert("Your Guess is TOO HIGH !!");
        }
        else if(guess < (answer - 10)) {
            window.alert("Your Guess is TOO LOW !!");
        }
        else if(guess > answer){
            window.alert("Your Guess is HIGH !!");
        }
        else if(guess < answer){
            window.alert("Your Guess is LOW !!");
        }
        else{
            window.alert(`Congratulations! , You Won. The number is ${answer}, it took you ${attempts} attempts.`);
            running = false;
        }
    }
}