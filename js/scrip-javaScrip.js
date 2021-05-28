function changeTitle(){
    /*Funcion que cambia el titulo de txtEjemplo y desaparece el boton */
    document.getElementById('txtEjemplo').innerText='Nuevo Titulo';
    document.getElementById('btnClick').remove();


}


function operar(tipo){
    alert(tipo);
    var t1 = document.getElementById('txtNumero1').value;
    var t1 = document.getElementById('txtNumero2').value;
    var n1 = parseInt(t1);
    var n1 = parseInt(t2);

    document.getElementById('txtResultadoSuma').value=sumar(n1,n2);
    document.getElementById('txtResultadoResta').value=restar(n1,n2);
    document.getElementById('txtResultadoMulti').value=multi(n1,n2);
    document.getElementById('txtResultadoDiv').value=divi(n1,n2);

    document.getElementById('txtDescripcion').innerHTML;
}


function sumar(n1,n2){
    console.log('Sumar: '+n1 +'+'+ n2);
    var r = n1+n2; //converte el String en entero
    document.getElementById('txtResultadoSuma').value=r;
    return r;
}


function restar(n1,n2){
    console.log('Restar: '+n1 +'+'+ n2);
    var r = n1-n2; //converte el String en entero
    document.getElementById('txtResultadoResta').value=r;
}
