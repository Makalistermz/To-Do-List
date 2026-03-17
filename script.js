let TarefasConcluidas = document.querySelector('#tarefasConcluidas');
let TarefasPendentes = document.querySelector('#tarefasPendentes');
let InputTarefas = document.querySelector('#tarefa');

function add() {

    if (InputTarefas.value.length === 0) {
        alert('Adicione alguma tarefa!');
        return;
    }

    let tarefa = document.createElement("div")

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let pendentes = document.createElement("p");
    pendentes.textContent = InputTarefas.value;
    InputTarefas.value = "";

    let apagar = document.createElement("button");
    apagar.textContent = "🗑️";

    apagar.addEventListener('click', function() {
        tarefa.remove()
    });

    checkbox.addEventListener('click', function() {
        TarefasConcluidas.append(tarefa);
    });

    tarefa.append(checkbox, pendentes, apagar);
    TarefasPendentes.appendChild(tarefa);
}