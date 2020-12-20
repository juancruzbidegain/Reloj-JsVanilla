let span = document.querySelector('#tiempo')

setInterval(function(){

    let date = new Date()

    horas = date.getHours()
    minutos = date.getMinutes()
    segundos = date.getSeconds()

    if(horas < 10){
        horas = "0" + horas
    }
    if(minutos < 10){
        minutos = "0" + minutos
    }
    if(segundos < 10){
        segundos = "0" + segundos
    }

    span.innerHTML = `${horas}: ${minutos} : ${segundos}`
    

},1000)