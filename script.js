let TarefasConcluidas = document.querySelector('#tarefasConcluidas');
let TarefasPendentes = document.querySelector('#tarefasPendentes');
let InputTarefas = document.querySelector('#tarefa');

function add() {

    if (InputTarefas.value.length === 0) {
        alert('Adicione alguma tarefa!');
        return;
    }

    let tarefa = document.createElement("div")

    let pendentes = document.createElement("p");
    pendentes.textContent = InputTarefas.value;
    InputTarefas.value = "";

    let apagar = document.createElement("button");
    apagar.textContent = "🗑️";

    TarefasPendentes.appendChild(pendentes);
    TarefasPendentes.append(apagar);

    let apagarbtn = addEventListener('click', function() {
        tarefa.remove()
    })
}