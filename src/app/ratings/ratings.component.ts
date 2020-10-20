import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent {
  @Input() rating: number;
  @Output() onRatingChange = new EventEmitter<number>();

  onChange(i) {
    this.onRatingChange.emit(i);
  }
}
