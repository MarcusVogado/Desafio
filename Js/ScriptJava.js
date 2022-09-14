// JavaScript source code
// metodo para elemento reenderizados na pagina
// radio button

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.info) {
        document.getElementById('userName').innerHTML = localStorage.info;
    }
});


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

    const numDesejado = document.getElementById("numDesejado").value;
    if (numDesejado > 1000000) {
        alert("Número maior que o suportado")
    }
    if ( numDesejado == 0 || numDesejado == "") {
        alert("Informe um Número maior que 0")
    }
    else {
        const sorteado = Math.floor((Math.random() * numDesejado) + 1);
        document.getElementById('result').innerHTML = sorteado;
        document.getElementById("listaSorteio").innerHTML = "";

       /* for (let i = 1; i <= sorteado; i++) {

            let label_ = document.createElement("Label");
            label_.innerHTML = "Nome: ";
            listaSorteio.appendChild(label_);



            let input_ = document.createElement("Input");
            input_.setAttribute("type", "text");
            listaSorteio.appendChild(input_);

            let br_ = document.createElement("br");
            listaSorteio.appendChild(br_);

        }*/
    }
}