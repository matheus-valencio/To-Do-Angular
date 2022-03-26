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
    console.log(localStorage.getItem('tarefa'));
  }

  getLista() {
    return Array.from(
      localStorage
        .getItem('tarefa')
        .replace(/"/g, '')
        .replace('[', '')
        .replace(']', '')
        .split(',')
    );
  }

  popLista(i) {
    localStorage.removeItem(i);
  }

  allStorage() {
    var values = [],
      keys = 'tarefa',
      i = keys.length;

    while (i--) {
      values.push(localStorage.getItem(keys[i]));
    }
    return values;
  }
}
