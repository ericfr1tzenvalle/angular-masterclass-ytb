import { Routes } from '@angular/router';
import {Home} from './screens/home/home';


export const routes: Routes = [
  {path: '', component: Home},
  //{path: 'contador', component: Contador}, import normal sem lazy loading
  {
    path:'contador',
    loadComponent: () => import('./screens/contador/contador').then(m => m.Contador)
  },// lazy loading só carrega quando acessamos a rota, é uma boa prática para otimizar o carregamento da aplicação
  {path: 'tarefas',
  loadComponent: () => import('./screens/tarefas/tarefas').then(m => m.Tarefas)},
];
