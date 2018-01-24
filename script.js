console.log("Olá pessoal");

//variável para importar a tag <a> do #id=menu que consta no html
let menus = document.querySelectorAll('#menu a')
let p = document.querySelectorAll("p");
//versão javascript6
const DefineNome = () => {
  //define o nome do link da tag <a>
  menus[0].innerHTML = "Home";
  menus[1].innerHTML = "Contato";
  menus[2].innerHTML = "Buscar";
}
DefineNome();

let mudarCor = () => {
  p.style.backgroundColor = "red";
}

//versão javascript 5
//function DefineNome() {
  //menus[0].innerHTML = "Home";
  //menus[1].innerHTML = "Contato";
//}

const DefineLink = () => {
  menus[0].href = "index.html";
  menus[1].href = "contato.html";
  menus[2].href = "https://www.google.com.br/";
}
DefineLink();

//let string = "meu texto aqui" //texto precisa de aspas
//let numero = 28; //número não precisa de aspas
//let booleano = true ou false

//if {
  //condição verdadeira = "true"
//} else {
  //condição falsa = "false"
//}
