

function clicou(){
    document.getElementById("agradecimento").innerHTML="<b>obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}
function redirecionar(){
    window.open("https://globallabs.ventures/");
    window.location.href="https://globallabs.ventures/";
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML="<b>Obrigado por passar o mouse</b>";
    elemento.innerHTML="Obrigado por passar o mouse";
    //alert("Trocar texto");
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML="<b>Passe o mouse aqui</b>";
    elemento.innerHTML="Passe o mouse aqui";
}
function load(){
    alert("Página carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value);
}


//VARIAVEL GLOBAL
/*
var validar=0;
function validarIdade(idade){
    if(idade>=18){
        validar=true;
    }else{
        validar=false;
    }
    return validar;
}
var idade=prompt("Digite sua idade");
validarIdade(idade);
console.log(validar);
*/
// VARIAVEL LOCAL.
/*
function validarIdade(idade){
    var validar;
    if(idade>=18){
        validar=true;
    }else{
        validar=false;
    }
    return validar;
}
var idade=prompt("Digite sua idade");
console.log(validarIdade(idade));
function soma(n1,n2){
    return n1*n2;
}
alert(soma(5,10));
*/

/*
var d=new Date();
alert(d.getHours());
alert(d.getMinutes());
alert(d.getSeconds());
*/

/*
var count;
for(count=0;count<4;count++){
    console.log(count);
}
*/

/*
var count=0;
while(count<=5){
    console.log("banana "+count);
    count++;
}
*/

/*
var idade=prompt("digite sua idade");
//var idade=18;
if(idade>=18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/
//var frutas=[{nome:"maça",cor:"vermelha"},{nome:"uva",cor:"roxa"},{nome:"abacaxi",cor:"amarelo"}];
//console.log(frutas[0].nome);
//1console.log(frutas[1].nome);
//console.log(frutas[2].nome);

//var lista = ["maca" , "pêra" , "laranja"];
//lista.push("uva");
//lista.pop();    
//console.log(lista.reverse().toString());
//console.log(lista.length);
//console.log(lista);
//console.log(lista.join("-"));


//var nome = "Luis Felipe Borges";
//var n1 = 5;
//var n2 = 6;
//var frase = "Eu não tenho criatividade pra frase";
//alert(nome + " é meu nome.");
//console.log(nome);
//console.log(n1+n2);
//console.log(frase.toLocaleUpperCase());
//alert (frase.replace("meu","minha"));
