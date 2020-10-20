import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent{

  visible: boolean = false;
  titulo: string = "Contador";
  counter: number = 0;

  increment() {
    this.counter++;
  }

  toggleVisibility() {
    this.visible = !this.visible;
  }
}
