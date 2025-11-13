import {Component, inject} from '@angular/core';
import {Titulo} from '../../components/shared/titulo/titulo';
import {TarefasService} from '../../services/tarefas.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-tarefas',
  imports: [
    Titulo,
    MatIconModule
  ],
  templateUrl: './tarefas.html',
  styleUrl: './tarefas.css',
})
export class Tarefas {
  readonly todos = inject(TarefasService);
  protected input = false;
  add(event: Event) {
    event.preventDefault();

    const inputElement = event.target as HTMLInputElement;
    const tarefa = inputElement.value.trim();
    if(tarefa == null || !tarefa){
      return;
    }
    if (tarefa) {
      this.todos.adicionarTarefa(tarefa);
      inputElement.value = '';
    }
  }
  toggleInput(state: boolean){
    this.input = state;
  }

}
