function redirSerie8(){
    window.location='serie_8.html';
}
var tiempoTest = document.getElementById('tiempoTest').value;
setTimeout( function (){
    alert('Se termino el tiempo');
    tempo();
    window.location='serie_8.html';
},tiempoTest*1000)

function obtenerValor(nombreGrupo){
    let grupo = document.getElementsByName(nombreGrupo);
    for(var i = 0; i < (grupo.length); i++){
        if(grupo[i].checked){
            return grupo[i].value;
        }
    }
}

function resultado(){
    let puntaje = 0;
    if(obtenerValor('respuesta1')=='A') puntaje++;
    if(obtenerValor('respuesta2')=='A') puntaje++;
    if(obtenerValor('respuesta3')=='C') puntaje++;
    if(obtenerValor('respuesta4')=='B') puntaje++;
    if(obtenerValor('respuesta5')=='B') puntaje++;
    if(obtenerValor('respuesta6')=='D') puntaje++;
    if(obtenerValor('respuesta7')=='C') puntaje++;
    if(obtenerValor('respuesta8')=='A') puntaje++;
    if(obtenerValor('respuesta9')=='A') puntaje++;
    if(obtenerValor('respuesta10')=='D') puntaje++;
    if(obtenerValor('respuesta11')=='B') puntaje++;
    if(obtenerValor('respuesta12')=='C') puntaje++;
    if(obtenerValor('respuesta13')=='B') puntaje++;
    if(obtenerValor('respuesta14')=='C') puntaje++;
    if(obtenerValor('respuesta15')=='C') puntaje++;
    if(obtenerValor('respuesta16')=='C') puntaje++;
    if(obtenerValor('respuesta17')=='B') puntaje++;
    if(obtenerValor('respuesta18')=='C') puntaje++;
    if(obtenerValor('respuesta19')=='C') puntaje++;
    if(obtenerValor('respuesta20')=='C') puntaje++;
    return puntaje;
}

function tempo(){
    redirSerie8()
    alert(resultado()*100/20);
}