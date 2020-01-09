const day = 10;
const month = 10;


const CAPRICORN = "capricorn - Козерог"; //Козерог +
const AQUARIUS = "aquarius - Водолей"; //Водолей +
const PISCES = "pisces - Рыбы"; //Рыбы +
const ARIES = "aries - Овен"; //Овен +
const TARIUS = "taurus - Телец"; //Телец +
const GEMINI = "Gemini - Близнецы"; //Близнецы +
const CANCER = "Cancer - Рак"; //Рак +
const LEO = "Leo - Лев"; //Лев +
const VIRGO = "Virgo - Дева"; //Дева +
const LIBRA = "Libra - Весы"; // Весы +
const SCORPIO = "Scorpio - Скорпион"; // Скорпион
const SAGITTRAIUS = "Sagittarius - Стрелец"; // Стрелец

let sign;
if (month === 1){
    if (day <= 19){
        sign = CAPRICORN;
    }else{
        sign = AQUARIUS;
    }
}else if (month === 2){
    if (day <= 18){
        sign = AQUARIUS;
    }else{
        sign = PISCES;
    }
}else if (month === 3){
    if (day <= 20){
        sign = PISCES;
    }else{
        sign = ARIES;
    }
}else if (month === 4){
    if (day <= 21){
        sign = ARIES;
    }else{
        sign = TARIUS;
    }
}else if (month === 5){
    if (day <= 20){
        sign = TARIUS;
    }else{
        sign = GEMINI;
    }
}else if (month === 6){
    if (day <= 20){
        sign = GEMINI;
    }else{
        sign = CANCER;
    }
}else if (month === 7){
    if (day <= 22){
        sign = CANCER;
    }else{
        sign = LEO;
    }
}else if (month === 8){
    if (day <= 22){
        sign = LEO;
    }else{
        sign = VIRGO;
    }
}else if (month === 9){
    if (day <= 22){
        sign = VIRGO;
    }else{
        sign = LIBRA;
    }
}else if (month === 10){
    if (day <= 22){
        sign = LIBRA;
    }else{
        sign = SCORPIO;
    }
}else if (month === 11){
    if (day <= 21){
        sign = SCORPIO;
    }else{
        sign = SAGITTRAIUS;
    }
}else if (month === 12){
    if (day <= 21){
        sign = SAGITTRAIUS;
    }else{
        sign = CAPRICORN;
    }
}


console.log(sign);

