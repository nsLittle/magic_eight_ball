// if/else statement

let userName = prompt("What is your name?");
userName === userName ? console.log(`Hello ${userName}!`) : console.log(`Hello!`);
let userQuestion = prompt(`What is your question ${userName}?`);
userQuestion !== userQuestion ? console.log(`You asked "${userQuestion}"`) : console.log(`You have no question, therefore no future.`);
let eightBall = Math.floor(Math.random() * 8);

if (eightBall=== 0) {
    console.log(`You rolled ${eightBall}. The Magic Eight Ball predicts, 'It is certain.'`)
} else if (eightBall === 1) {
    console.log(`You rolled ${eightBall}. The Magic Eight Ball predicts, 'It is decidedly so.'`)
} else if (eightBall === 2) {
    console.log(`You rolled ${eightBall}. The Magic Eight Ball predicts, 'Reply hazy try again.'`)
} else if (eightBall === 3) {
    console.log(`You rolled ${eightBall}. The Magic Eight Ball predicts, 'Cannot predict now.'`)
} else if (eightBall === 4) {
    console.log(`You rolled ${eightBall}. The Magic Eight Ball predicts, 'Do not count on it.'`)
} else if (eightBall === 5) {
    console.log(`You rolled ${eightBall}. The Magic Eight Ball predicts, 'My sources say no.'`)
} else if (eightBall === 6) {
    console.log(`You rolled ${eightBall}. The Magic Eight Ball predicts, 'Outlook not so good.'`)
} else {
    console.log(`You rolled ${userName}. The Magic Eight Ball predicts, 'Signs point to yes.'`)
};


// switch statement
/*
let userName = prompt("What is your name?");
userName === userName ? console.log(`Hello ${userName}!`) : console.log(`Hello!`);
let userQuestion = prompt(`What is your question ${userName}?`);
userQuestion === userQuestion ? console.log(`You asked "${userQuestion}"`) : console.log(`You have no question, therefore no future.`);
let eightBall = Math.floor(Math.random() * 8);

switch(eightBall) {
    case 0:
        console.log(`You rolled ${eightBall}. The Magic Eight Ball predicts, 'It is certain.'`);
        break;
    case 1:
        console.log(`You rolled ${eightBall}. The Magic Eight Ball predicts, 'It is decidedly so.'`);
        break;
    case 2:
        console.log(`You rolled ${eightBall}. The Magic Eight Ball predicts, 'Reply hazy try again.'`);
        break;
    case 3:
        console.log(`You rolled ${eightBall}. The Magic Eight Ball predicts, 'Cannot predict now.'`);
        break;
    case 4:
        console.log(`You rolled ${eightBall}. The Magic Eight Ball predicts, 'Do not count on it.'`);
        break;
    case 5:
        console.log(`You rolled ${eightBall}. The Magic Eight Ball predicts, 'My sources say no.'`);
        break;
    case 6:
        console.log(`You rolled ${eightBall}. The Magic Eight Ball predicts, 'My sources say no.'`);
        break;
    case 7:
        console.log(`You rolled ${userName}. The Magic Eight Ball predicts, 'Signs point to yes.'`);
        break;
};
*/
