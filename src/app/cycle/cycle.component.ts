import { Component, Input, OnInit, OnDestroy, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.css']
})
export class CycleComponent implements OnInit, OnDestroy, OnChanges {

  @Input() id: number;
  @Input() label: string;

  interval: NodeJS.Timeout;

  constructor() { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      console.log(`Component #${this.id} Log.`);
    }, 2000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes));
  }

}
