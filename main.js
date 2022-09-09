var Nickol = {
    photo: '/Аватарки/avatar1.jpg',
    nickname: 'Nickol',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam recusandae velit tempore illo minus maiores nesciunt ullam, quam, qui illum libero laboriosam, labore fuga dolor. Ipsa commodi beatae dolore officia!',
}
var Jame = {
    photo: '/Аватарки/avatar2.jpg',
    nickname: 'Jame',
    text: 'nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse'
}
var Issa = {
    photo: '/Аватарки/avatar3.jpg',
    nickname: 'Issa',
    text: 'varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum'
}
var Kyle = {
    photo: '/Аватарки/avatar4.jpg',
    nickname: 'Kyle',
    text: 'vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et odio',
}
var RAM1N = {
    photo: '/Аватарки/avatar5.jpg',
    nickname: 'RAM1N',
    text: 'I am the creator of this site!'
}

var listOfPeople = [Nickol, Jame, Issa, Kyle, RAM1N];

var position = -1;

var avatarka = document.getElementById('avatar-img');
var nick = document.getElementById('name');
var text = document.getElementById('text');

function back() {
    if (position < 1) {
        position = 5;
    }

    position -= 1;
    avatarka.src = listOfPeople[position].photo;
    nick.innerHTML = listOfPeople[position].nickname;
    text.innerHTML = listOfPeople[position].text;
}

function forward() {
    if (position > 3) {
        position = -1;
    }

    position += 1;
    avatarka.src = listOfPeople[position].photo;
    nick.innerHTML = listOfPeople[position].nickname;
    text.innerHTML = listOfPeople[position].text;
}