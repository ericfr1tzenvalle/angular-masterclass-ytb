# Angular Masterclass 

Este repositório contém um projeto desenvolvido a partir da videoaula **“Masterclass Angular 20 | Atualizado 2025”**, disponibilizada pela Cod3r Cursos no YouTube.

A aplicação consiste em um painel simples utilizado para explorar conceitos fundamentais e atuais do Angular, com foco em **Signals**, **componentização standalone**, **Lazy Loading no roteamento** e integração com **TailwindCSS**.

---

## Contexto do Projeto

O objetivo é praticar os recursos modernos introduzidos nas versões mais recentes do Angular (17+).  
A aula utilizada como referência está disponível neste link:

**Masterclass Angular 20 | Atualizado 2025 (Cod3r Cursos)**  
https://www.youtube.com/watch?v=_dh6dpaiTrY

---

## Funcionalidades

O projeto é dividido em três telas principais, acessadas por meio de um menu lateral:

### Página Home  
Tela inicial da aplicação, que apresenta o painel.

### Contador  
Implementa um contador utilizando **Angular Signals**, demonstrando operações como `signal`, `update` e `set` para gerenciamento reativo de estado.

### Lista de Tarefas (To-Do List)  
Funcionalidade principal da aplicação, incluindo:
- Criação e remoção de tarefas.
- Marcação de tarefas como concluídas ou pendentes.
- Renderização de listas com `@for`.
- Comunicação entre componentes por meio de serviço injetado com `Inject`.
- Persistência de dados no navegador utilizando `localStorage`, controlada por um `effect` que salva automaticamente as alterações de estado.

---

## Tecnologias e Conceitos Aplicados

- Angular 17+ (Standalone Components)  
- Angular Signals  
- TypeScript  
- TailwindCSS  
- Angular Router com Lazy Loading (`loadComponent`)  
- Angular Material (ícones)  
- Componentização e reutilização de componentes  
- Inputs usando `@input` para passagem de dados entre componentes  

---

## Como Executar o Projeto

Requisitos:  
- Node.js (versão LTS)  
- Angular CLI instalado globalmente  

### 1. Clonar o repositório
```bash
git clone https://github.com/ericfr1tzenvalle/angular-masterclass-ytb.git
cd angular-masterclass-ytb
npm install
ng serve
```
Acesse no navegador: http://localhost:4200/

---
