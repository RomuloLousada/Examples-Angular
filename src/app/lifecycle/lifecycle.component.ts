import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent {

  visible: boolean = false;
  ids: number[] = [];
  lastId: number = 0;
  storedChanges = [];

  toggleVisibility() {
    this.visible = !this.visible;
  }

  add() {
    this.lastId++;
    this.ids.push(this.lastId);
  }

  remove(id: number) {
    this.ids.splice(this.ids.indexOf(id), 1);
  }

}
