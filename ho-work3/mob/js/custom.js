var userName = 'Sribnyy';

var date = new Date();
var day = date.getDate();
var month = date.getMonth();

var year = date.getFullYear();
document.querySelector(".btn").onclick = function () {

    checkMessage();
    clearField();
};


var parent = document.getElementById('Reviews');

function newmes() {



    var div = document.createElement('div');

    div.setAttribute("class", "Reviews-comment");
    div = parent.appendChild(div);
    div.innerHTML = '';

}

var parentDiv = document.querySelector('.Reviews');



function getMonthName(monthNum) {
    var monthName = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    return monthName[monthNum]
}



function addUserName() {
    var user = document.createElement('p');
    user.className = "Reviews-comment-name";
    parentDiv.appendChild(user);
    user.innerHTML = userName;
}

function addTime() {
    var time = document.createElement('time');
    time.className = "Reviews-comment-time";
    parentDiv.appendChild(time);
    time.innerHTML = day + " " + getMonthName(month) + " " + year;
}

function addicon() {
    var icon = document.createElement('div');
    icon.className = "icon";
    parentDiv.appendChild(icon);
    icon.innerHTML = iconName;
}

function addMessageText(selector) {
    var message = document.createElement('p');
    message.className = "Reviews-comment-Reviews";
    parentDiv.appendChild(message);
    message.innerHTML = document.querySelector(selector).value;
}




function checkMessage() {
    if (document.querySelector(".mytext").value != 0) {
        newmes();
        addUserName();

        addTime();

        addMessageText('.mytext');
        addicon();


    } else {
        alert('Нужно заполнить поле!')
    }
}

function clearField() {
    document.querySelector('.mytext').value = '';
}