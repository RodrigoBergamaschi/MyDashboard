var materiasEscolares = [];
var listaCompra = [];
var itemCompra;
var aluno = {};
//#region itens
var materiailEscolar =
{
    nome: "Caneta",
    preco: 2
};
materiasEscolares.push(materiailEscolar);

materiailEscolar =
    {
        nome: "Lápis",
        preco: 2
    };
materiasEscolares.push(materiailEscolar);

materiailEscolar =
    {
        nome: "Caderno",
        preco: 10
    };
materiasEscolares.push(materiailEscolar);

materiailEscolar =
    {
        nome: "Mochila",
        preco: 50
    };
materiasEscolares.push(materiailEscolar);

materiailEscolar =
    {
        nome: "Borracha",
        preco: 3
    };
materiasEscolares.push(materiailEscolar);

materiailEscolar =
    {
        nome: "Cola",
        preco: 7
    };
materiasEscolares.push(materiailEscolar);

materiailEscolar =
    {
        nome: "Calculadora",
        preco: 20
    };
materiasEscolares.push(materiailEscolar);

materiailEscolar =
    {
        nome: "Corretivo",
        preco: 2
    };
materiasEscolares.push(materiailEscolar);

materiailEscolar =
    {
        nome: "Régua",
        preco: 6
    };
materiasEscolares.push(materiailEscolar);

materiailEscolar =
    {
        nome: "Compasso",
        preco: 6
    };
materiasEscolares.push(materiailEscolar);
//#endregion

//#region preencimento lita de itens
for (var i = 0; i < materiasEscolares.length; i++) {
    console.log(i, materiasEscolares[i]); // i é o índice, matriz[i] é o valor
}

var lista = document.getElementById("listamateriais");
console.log(lista);
lista.innerHTML =
    '<option selected>' + materiasEscolares[0].nome + '</option>' +
    '<option selected>' + materiasEscolares[1].nome + '</option>' +
    '<option selected>' + materiasEscolares[2].nome + '</option>' +
    '<option selected>' + materiasEscolares[3].nome + '</option>' +
    '<option selected>' + materiasEscolares[4].nome + '</option>' +
    '<option selected>' + materiasEscolares[5].nome + '</option>' +
    '<option selected>' + materiasEscolares[6].nome + '</option>' +
    '<option selected>' + materiasEscolares[7].nome + '</option>' +
    '<option selected>' + materiasEscolares[8].nome + '</option>' +
    '<option selected>' + materiasEscolares[9].nome + '</option>'
//#endregion

//#region preenchimento paragrafo com nome do anulo

//#endregion

function validarForm() {
    return $('#nomeAluno').valid() &&
        $("#totalDisponivel").valid();
       
}

function feedbackFormValidacao() {

    if ($('#nomeAluno').valid() && $('#totalDisponivel').valid())
    {
      $('#botaoIniciarCompra').prop('disable', false)
    }
   
}



function iniciarCompra() {
    var valido = validarForm();
    if(valido)
    {
    aluno.nome = $("#nomeAluno").val();
    aluno.total = parseInt($('#totalDisponivel').val());
    console.log(aluno);
    var paragrafoaluno = document.getElementById("p.aluno");
    paragrafoaluno.innerHTML = '<i class="fas fa-list"></i> Lista de materiais do aluno: ' + $('#nomeAluno').val();

    
    }
    
}