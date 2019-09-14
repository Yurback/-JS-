function slider() {
    let numSlider = 1,
        slids = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlide(numSlider);

    function showSlide(n) {
        if (n > slids.length) numSlider = 1;
        else if (n < 1) numSlider = slids.length;

        slids.forEach((item) => item.style.display = 'none');
        //     for (let i = 0; i < slids.length; i++){              Тоже самое что и метод forEach (см.192 строка)
        //         slids[i].style.display = 'none';
        //     }
        dots.forEach((item) => item.classList.remove('dot-active'));

        slids[numSlider - 1].style.display = 'block';
        dots[numSlider - 1].classList.add('dot-active');
        console.log(n);
    }

    function pluseSlide(n) {
        showSlide(numSlider += n);
    }

    prev.addEventListener('click', () => {
        pluseSlide(-1);
    });

    next.addEventListener('click', () =>
        pluseSlide(1)
    );

    dotsWrap.addEventListener('click', function (event) {
        console.log('работает');
        for (var i = 1; i <= dots.length; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                console.log(i);
                showSlide(numSlider = i);
            }
        }
    })
}

module.exports = slider;