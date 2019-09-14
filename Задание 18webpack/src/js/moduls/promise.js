function promise() {
    let message = {
        loading: "Загрузка...",
        sucsess: "Спасибо, скоро мы с вами свяжемся",
        failure: "Что-то пошло не так..."
    }

    let form = document.querySelector('.main-form'),
        form2 = document.getElementById('form'),
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    function XHR() {
        event.preventDefault();
        event.target.appendChild(statusMessage);
        let promise = function () {
            return new Promise(function (resolve, reject) {
                let request = new XMLHttpRequest();
                request.open("POST", 'server.php');
                // request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');       - Для формата Formdata
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');         // - Для формата json
                let formdata = new FormData(event.target);

                let obj = {};
                formdata.forEach(function (value, key) {
                    obj[key] = value;
                });
                console.log(obj);
                let json = JSON.stringify(obj);

                request.send(json);                                                                 // - Для отправки json
                // request.send(formdata);                                                             - Для отправки FormData

                request.addEventListener("readystatechange", () => {
                    // if (request.readyState < 4) {                            // Так не работает если будет ошибка и reject не сработает
                    //     resolve(); }  
                    if (request.status == 200) {
                        resolve();
                    } else {
                        reject();
                    }
                })

            })

        }
        function clearInput() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }

        promise()
            .finally(clearInput)
            .then(() => statusMessage.innerHTML = message.loading)
            .then(() => statusMessage.innerHTML = message.sucsess)
            .catch(() => statusMessage.innerHTML = message.failure);


    }

    form.addEventListener('submit', XHR);
    form2.addEventListener('submit', XHR);

}

module.exports = promise;