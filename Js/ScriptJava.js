// JavaScript source code


if (localStorage.info) {    
    document.getElementById('userName').innerHTML =localStorage.info;
}


function direcionarPage() {

    const name = document.getElementById('userName').value;
    localStorage.info = document.getElementById('userName').value;
    const idade = document.getElementById('userIdade').value;
    
    if (name == "" || idade == "") {
        alert("Nome e Idade precisam ser preenchidos")
    }
    else {
               
        window.location.href = "PageSorteio.html"
                
    }

}
function sortearNumeros() {

    const sorteado = Math.floor((Math.random() * 5) + 1);
    document.getElementById('result').innerHTML = sorteado;
    document.getElementById("listaSorteio").innerHTML = "";

    for (let i = 1; i <= sorteado; i++) {
        let item = document.createElement('li');
        item.appendChild(document.createTextNode("**** SORTEIO ****"));
        listaSorteio.appendChild(item);


    }
    
} 