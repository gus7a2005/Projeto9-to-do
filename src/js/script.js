// DECLARANDO AS VARIÁVEIS

let tarefas=[];

// função que valida o preenchimento do campo caso esteja vazio

function validaCampo()
{
    let valida = false;
    if(document.getElementById("task").value =="")
    valida =true;
    return valida;
}