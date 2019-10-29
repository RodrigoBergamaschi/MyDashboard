var materiasEscolares = [];
var listaCompra = [];
var itemCompra = {};
var aluno = {};
//#region itens
var materiailEscolar =
{
    nome: "Caneta",

};
materiasEscolares.push(materiailEscolar);

materiailEscolar =
    {
        nome: "Lápis",

    };
materiasEscolares.push(materiailEscolar);

materiailEscolar =
    {
        nome: "Caderno",

    };
materiasEscolares.push(materiailEscolar);

materiailEscolar =
    {
        nome: "Mochila",

    };
materiasEscolares.push(materiailEscolar);

materiailEscolar =
    {
        nome: "Borracha",

    };
materiasEscolares.push(materiailEscolar);

materiailEscolar =
    {
        nome: "Cola",

    };
materiasEscolares.push(materiailEscolar);

materiailEscolar =
    {
        nome: "Calculadora",

    };
materiasEscolares.push(materiailEscolar);

materiailEscolar =
    {
        nome: "Corretivo",

    };
materiasEscolares.push(materiailEscolar);

materiailEscolar =
    {
        nome: "Régua",

    };
materiasEscolares.push(materiailEscolar);

materiailEscolar =
    {
        nome: "Compasso",

    };
materiasEscolares.push(materiailEscolar);
//#endregion

//#region preencimento lita de itens
for (var i = 0; i < materiasEscolares.length; i++) {
    var lista = document.getElementById("material");
    lista.innerHTML +=
        '<option selected>' + materiasEscolares[i].nome + '</option>';

}


//#endregion

//#region validação para botao
function validarInicio() {

    if ($('#nomeAluno').valid() && $('#totalDisponivel').valid()) {
        $("#botaoForm").attr('disabled', false);
    } else {
        $("#botaoForm").attr('disabled', true);
    }
}
//#endregion

//#region adicionando item na listaItem
function validaItem() {
    return $('#material').valid() &&
        $("#qteMaterial").valid() &&
        $('#precoUnitario').valid();

}


function adicionaItemNaLista() {
    var valido = validaItem();
    if (valido) {
        itemCompra.nome = $('#material').val();
        itemCompra.quantidadeItem = parseInt($('#qteMaterial').val());
        itemCompra.precoUnitario = parseInt($('#precoUnitario').val());
        itemCompra.valorTotal = calculaValorTotal(itemCompra.quantidadeItem, itemCompra.precoUnitario)

        listaCompra.push(itemCompra);
        for (var i = 0; i < listaCompra.length; i++) {
            console.log(listaCompra[i])
            adicionaItemNaTabela(listaCompra)
        }
    }

    else {
        console.log("ta dando ruim aqui");

    };

    function calculaValorTotal(quantidadeItem, precoUnitario) {

        return quantidadeItem * precoUnitario;
    }


}
//#endregion

function adicionaItemNaTabela(listaCompra) {
    for (var i = 0; i < listaCompra.length; i++) {
        var tabela = document.querySelector("table");
        var tr = tabela.insertRow();
        tr.innerHTML = "<td>" + itemCompra.nome + "</td>" +
            "<td>" + itemCompra.quantidadeItem + "</td>" +
            "<td>" + itemCompra.precoUnitario + "</td>" +
            "<td>" + itemCompra.valorTotal + "</td>";
       
   }
}