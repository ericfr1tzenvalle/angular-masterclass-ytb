import {Component, input} from '@angular/core';
import {RouterLink, Routes} from '@angular/router';

@Component({
  selector: 'app-menu-item',
  imports: [
    RouterLink
  ],
  templateUrl: './menu-item.html',
  styleUrl: './menu-item.css',
})
export class MenuItem {
  // esse input required obriga a passar a label quando usar o componente MenuItem
  readonly label = input.required<string>();
  // esse input required obriga a passar a rta quando usar o componente MenuItem
  readonly route = input.required<string>();
}
