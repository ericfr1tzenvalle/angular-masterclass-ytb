import {effect, Injectable, signal} from '@angular/core';
import{Tarefas} from '../models/tarefas';
//adcionar o crypto para gerar id unico

@Injectable({
  providedIn: 'root',
})
export class TarefasService {
  private id = 4; // iniciar o id com 4, pois já temos 3 tarefas iniciais
  private readonly _items = signal<Array<Tarefas>>([
    {id: 1, titulo: 'Comprar pão', concluida: false},
    {id: 2, titulo: 'Estudar Angular', concluida: true},
    {id: 3, titulo: 'Fazer exercícios', concluida: false},
  ]);

  readonly items = this._items.asReadonly();
  constructor() {
    this._loadFromLocalStorage();
    effect(() => {
      localStorage.setItem('tarefas', JSON.stringify(this._items()));
    }); //melhor que usar subscribe, pois o effect é mais performatico e otimizado para signals
    // o effect vai ser executado toda vez que o signal _items for atualizado
    //tudo que estiver dentro do effect vai ser reexecutado quando o signal mudar
    // serve para qualquer signal, não só para salvar no localStorage

  }
  concluirTarefa(id: number): void {
    this._items.update((tarefas) =>
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
        // a sequencia é tarefa == id ? (esse ... significa que vai retornar um novo objeto com as propriedades antigas mais a propriedade concluida invertida) : (se não for igual retorna a tarefa original)

      )

    );
  }
  removerTarefa(id: number): void {
    this._items.update((tarefas) =>
      tarefas.filter((tarefa) => tarefa.id !== id)
      // filtra todas as tarefas que o id for diferente do id passado, ou seja, remove a tarefa com o id passado
    );
  }
  adicionarTarefa(titulo: string): void {
    const novaTarefa: Tarefas = {
      id: this.id++,
      titulo,
      concluida: false,
    };
    this._items.update((tarefas) => [...tarefas, novaTarefa]);

    // cria um novo array com todas as tarefas antigas mais a nova tarefa
    }

    _loadFromLocalStorage(): void {
      const data = localStorage.getItem('tarefas');
      if (data) {
        this._items.set(JSON.parse(data));
      }

    }



}
