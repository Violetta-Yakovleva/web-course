//Вариант 1 - с дополнительной переменной

// const celsiy = parseFloat(prompt("Введите температуру в градусах Цельсия, С: "));
// const farengeit = ((celsiy * 9/5) + 32).toFixed(2) //округление до 2х знаков после запятой
// alert(`Цельсий: ${celsiy}, Фаренгейт: ${farengeit}`); 


//Вариант 2 - с функцией

const celsiy = Number.parseFloat(prompt("Введите температуру в градусах Цельсия, С: ")); //либо использовать +prompt
alert(`Цельсий, C: ${celsiy}, Фаренгейт, F: ${farengeit(celsiy).toFixed(2)}`); 

function farengeit(celsiy) {
    return (celsiy * 9/5) +32;
}





