function calculationDay() {
    const birthday = document.getElementById('birthday').value;
    const day = Date.parse(birthday);
    let today = new Date();
    let result = document.getElementById('massage');
    let massage = Math.floor(((day - today) / (1000 * 3600 * 24)) + 1);
    let date = '';
    let verb = 'осталось';
    let img = document.getElementById('foto');
    document.getElementById('birthday').value = "";


    if ((massage % 10) === 1) {
        date = 'день.';
        verb = 'остался';
    }
    else if ((massage >= 10) && (massage <= 20)) {
        date = 'дней.';
    }
    else if (((massage % 10) === 2) || ((massage % 10) === 3) || ((massage % 10) === 4)) {
        date = 'дня.';
    }
    else {
        date = 'дней.';
    }

    if (birthday === "") {
        result.textContent = "Выберите дату вашего рождения!";
        result.style.color = "red";
    }
    else if (massage === 0) {
        result.textContent = "Поздравляем с Днем рождения!";
        result.style.color = "green";
        img.src = 'images/flower.jpg';
    }
    else if (massage < 0) {
        result.textContent = "В этом году вы уже отпраздновали свой день рождения. С прошедшим!";
        result.style.color = "orange";
        img.src = 'images/present1.jpeg';
    }
    else {
        result.textContent = "До вашего дня рождения " + verb + " " + massage + " " + date;
        result.style.color = "blue";
        img.src = 'images/present2.jpg';
    }
}

function clearText() {
    document.getElementById('massage').innerHTML = "";
    document.getElementById('foto').src = "";
}












