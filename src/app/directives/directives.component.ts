import { Component } from '@angular/core';
import { TodoItem } from './todoitem';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  show: boolean = true;
  visible: boolean = false;

  toggleVisibility() {
    this.visible = !this.visible;
  }

  toggle() {
    this.show = !this.show;
  }

  done: string = "✓";
  todo: string = "✕";

  tasks: TodoItem[] = [
    {
      description: 'Arrumar a cama',
      done: true
    },
    {
      description: 'Fazer café',
      done: true
    },
    {
      description: 'Escovar os dentes',
      done: false
    },
    {
      description: 'Tomar banho',
      done: false
    }
  ];

  addTask(description: string) {
    this.tasks.push({
      description: description,
      done: false
    });
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
