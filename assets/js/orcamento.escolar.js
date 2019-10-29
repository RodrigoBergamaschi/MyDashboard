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
        console.log($('#totalDisponivel').val());
        
        exibirParagragrafoAluno();
        validaSaldo();
    } else {
        $("#botaoForm").attr('disabled', true);
    }
}
function exibirParagragrafoAluno()
{
    var p = document.getElementById('p.aluno')
        p.innerHTML = '<i class="fas fa-list"></i>' +
        ' Lista de materiais do aluno: ' +$('#nomeAluno').val();
}

function validaSaldo()
{
    if($('#totalDisponivel').valid())
    {
        var saldo = document.getElementById('saldo');
        saldo.innerText ='R$ ' + $('#totalDisponivel').val();
       
        console.log(saldo)
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
            adicionaItemNaTabela(itemCompra)
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

function adicionaItemNaTabela(itemCompra) {
    for (var i = 0; i < listaCompra.length; i++) {
        var tabela = document.querySelector("table");
        var tr = tabela.insertRow();
        tr.innerHTML = "<td>" + itemCompra[i].nome + "</td>" +
            "<td>" + itemCompra[i].quantidadeItem + "</td>" +
            "<td>" + itemCompra[i].precoUnitario + "</td>" +
            "<td>" + itemCompra[i].valorTotal + "</td>";
      
   }
}


