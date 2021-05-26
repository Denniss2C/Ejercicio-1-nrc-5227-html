/*Funcion registra la hora de acceso a la pagina */
function logAccess(name){
    var hoy = new Date();
    console.log('Acceso Registrado a '+name);
    console.log(hoy.getHours()+" : "+hoy.getMinutes()+" : "+hoy.getSeconds());

}