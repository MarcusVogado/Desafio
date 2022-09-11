// JavaScript source code

// verificar se nomes e idade foram preenchidos usando java e verifica ser nome isNullOrEmpty


function direcionarPage() {

    const name = document.getElementById('userName').value;
    const idade = document.getElementById('userIdade').value;

    if (name == "" || idade==null) {
        alert("Nome e Idade precisam ser preenchidos")
    } else {
        
        window.location.href = "PageSorteio.html"
    }        
                
}
function sortearNumeros() {

  const sorteado = Math.floor(( Math.random()* 5)+1);

    document.getElementById('result').innerHTML = sorteado;
}