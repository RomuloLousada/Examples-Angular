import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.css']
})

export class PanelsComponent {
  @Input() title: string;

  expanded: boolean = true;
  visible: boolean = false;

  toggleVisibility() {
    this.visible = !this.visible;
  }

  toggle() {
    this.expanded = !this.expanded;
  }
}
