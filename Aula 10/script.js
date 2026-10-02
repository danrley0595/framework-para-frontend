const { createApp } = Vue

createApp({
    data() {
        // inicializa as variaveis e a lista
        return {
            nomeTarefa: '',
            responsavel: '',
            prioridade: '',
            tarefas: []
        }
    },
    methods: {
        adicionarTarefa() {

            // se nome e responsavel vazio não inclui a tarefa
            if (!this.nomeTarefa.trim() || !this.responsavel.trim()) {
                alert('O Nome da Tarefa e o Responsável são obrigatórios!');
                return;
            }
            // cria o item e passa os valores dos campos
            const novoItem = {
                nome: this.nomeTarefa,
                responsavel: this.responsavel,
                prioridade: this.prioridade
            };

            // inclui o item
            this.tarefas.push(novoItem);

            // limpa depois de adicionar
            this.nomeTarefa = '';
            this.responsavel = '';
            this.prioridade = '';
        },
        // excluir tarefa
        excluirTarefa(index) {
            this.tarefas.splice(index, 1);
        }
    }
}).mount("#app")
