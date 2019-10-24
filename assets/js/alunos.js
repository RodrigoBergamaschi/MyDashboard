var aluno = {};
var result;

var alunos = {};
function adicionarAluno(){
    aluno.nome = $("#nomeAluno").val();
    aluno.nota1 = parseInt($("#primeiroBi").val());
    aluno.nota2 = parseInt($("#segundoBi").val());
    aluno.nota3 = parseInt($("#terceiroBi").val());
    aluno.nota4 = parseInt($("#quartoBi").val());
    aluno.total = calcularTotal(aluno.nota1, aluno.nota2, aluno.nota3, aluno.nota4);
    aluno.media = calcularMedia(aluno.total);
    aluno.situacao = calcularSituacao(aluno.media);
    console.log($(":form").valid());
    console.log($(":form").validate());
    
    adicionarLinhaTabela(aluno);

    aluno = {};
   $(":input").val('');
}

function calcularTotal(nota1, nota2, nota3, nota4){
    return nota1 + nota2 + nota3 +nota4;
}

function calcularMedia(total){
  return total / 4;
}

function calcularSituacao(media){
    const MEDIA_APROVACAO = 7;

    if(media >= MEDIA_APROVACAO){
        
        return '<span class="badge badge-success">APROVADO</span>';

    }
    else{
        
        return '<span class="badge badge-danger">REPROVADO</span>';
    }
}

function adicionarLinhaTabela(objeto){
    console.log(objeto);
    var tabela = document.querySelector("table");
    var tr = tabela.insertRow(1);
    tr.innerHTML = "<td>" + objeto.nome + "</td>" +
                   "<td>" + objeto.nota1 + "</td>" +
                   "<td>" + objeto.nota2 + "</td>" +
                   "<td>" + objeto.nota3 + "</td>" +
                   "<td>" + objeto.nota4 + "</td>" +
                   "<td>" + objeto.total + "</td>" +
                   "<td>" + objeto.media + "</td>" +
                   "<td>" + objeto.situacao + "</td>"; 
}