import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  item;
  lista: string[];
  constructor() {
    this.lista = [];
  }

  pushLista() {
    this.lista.push(this.item);
    localStorage.setItem('tarefa', JSON.stringify(this.lista));
  }

  getLista() {
    if (localStorage.getItem('tarefa') == '[]') {
    } else {
      this.lista = Array.from(
        localStorage
          .getItem('tarefa')
          .replace(/"/g, '')
          .replace('[', '')
          .replace(']', '')
          .split(',')
      );
      return Array.from(
        localStorage
          .getItem('tarefa')
          .replace(/"/g, '')
          .replace('[', '')
          .replace(']', '')
          .split(',')
      );
    }
  }

  popLista(i) {
    this.lista.splice(i, 1);
    localStorage.setItem('tarefa', JSON.stringify(this.lista));
  }
}
