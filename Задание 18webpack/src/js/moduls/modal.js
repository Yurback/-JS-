function modal() {
    let more = document.querySelector(".more"),
        overlay = document.querySelector(".overlay"),
        close = document.querySelector(".popup-close");

    function hiddeBody() {
        overlay.style.display = 'block';
        this.classList.add('more-splash')
        document.body.style.overflow = 'hidden';
    }

    more.addEventListener('click', hiddeBody)

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        this.classList.remove('more-splash');
        document.body.style.overflow = '';
    })


    let tabShow_more = document.getElementsByClassName("description-btn");

    for (var i = 0; i < tabShow_more.length; i++) {
        tabShow_more[i].addEventListener('click', hiddeBody);
    }
}

module.exports = modal;