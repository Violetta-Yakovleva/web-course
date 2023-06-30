const userName = prompt("Введите ваше имя: ");

// alert(greeting(userName));
greeting(userName);

function greeting(name) {
    return console.log(`Приветствую, ${userName}!`);
}