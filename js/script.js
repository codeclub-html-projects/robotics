function example1() {
    alert('Привет, JavaScript');
    let name = prompt('Как Вас зовут?');
    alert('Будем знакомы, ' + name);
    let choice = confirm('Хотите перейти на поисковик Bing?');
    if (choice == true) {
        window.location = 'https://www.bing.com';
    } else {
        alert('Ну не хотите и не надо!');
    }
}


window.onload = function () {
    
    let b1 = document.getElementById('b1');
    b1.onclick = function () {
        example1();
    };
    
};

