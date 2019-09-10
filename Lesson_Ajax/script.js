let inputRub = document.getElementById('R');
let inputUSD = document.getElementById('U');
let request = new XMLHttpRequest();

inputRub.oninput = () => {
    request.open('POST', 'course.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    request.onload = () => {
        if ( request.status == 200) {
            let data =JSON.parse(request.responseText);
            inputUSD.value = inputRub.value / data.usd;
        }
    }
}

inputUSD.oninput = () => {
    request.open('POST', 'course.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    request.onload = () => {
        if ( request.status == 200) {
            let data =JSON.parse(request.responseText);
            inputRub.value = inputUSD.value * data.rub;
        }
    }
}