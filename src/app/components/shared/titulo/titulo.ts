import {Component, input} from '@angular/core';

@Component({
  selector: 'app-titulo',
  imports: [],
  templateUrl: './titulo.html',
  styleUrl: './titulo.css',
})
export class Titulo {
  readonly titulo = input.required<string>();
  readonly sub = input<string>();

}
