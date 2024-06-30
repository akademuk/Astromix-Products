document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector('.header__burger');
    const headerMain = document.querySelector('.header__main');
    const burgerIcon = document.querySelector('.burger-icon');

    burger.addEventListener('click', function(event) {
        event.stopPropagation(); // Остановить всплытие события
        headerMain.classList.toggle('open');
        burgerIcon.classList.toggle('open');
    });

    document.addEventListener('click', function(event) {
        if (!headerMain.contains(event.target) && !burger.contains(event.target)) {
            headerMain.classList.remove('open');
            burgerIcon.classList.remove('open');
        }
    });
});
