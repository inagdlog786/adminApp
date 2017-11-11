import { Component } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})
export class AppComponent {
  constructor(private dataService: DataService){

  }
  copyRights= '';
  ngOnInit(){
    //console.log(this.dataService.cars);
    this.copyRights = this.dataService.myData();
  }
}
