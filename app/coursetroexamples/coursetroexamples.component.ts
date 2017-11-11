import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-coursetroexamples',
  templateUrl: './coursetroexamples.component.html',
  styleUrls: ['./coursetroexamples.component.scss']
})
export class CoursetroexamplesComponent implements OnInit {
  imageOne= 'https://static.pexels.com/photos/34950/pexels-photo.jpg';
  ButtonStatus= true;
  ButtonStatusString= 'Desabled';
  clickEvent(event){
    console.log(event);
  }
  mouseEnter(event){
    console.log(event);
  }
  constructor() {

   }

  ngOnInit() {
  }

}
