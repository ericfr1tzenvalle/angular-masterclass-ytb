import { Component } from '@angular/core';
import {Titulo} from '../../components/shared/titulo/titulo';

@Component({
  selector: 'app-home',
  imports: [
    Titulo
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
