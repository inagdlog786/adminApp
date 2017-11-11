import { Component, OnChanges, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges, OnInit {
  @Input() rating: number;
  persentage: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string>= new EventEmitter<string>();
  ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5;
  }
  ngOnInit() {
    this.persentage = this.rating;
  }
  onclick(){
    this.ratingClicked.emit(`Total Users List and ${this.rating} was clicked!`);
  }
}
