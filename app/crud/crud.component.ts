import { Component, OnInit } from '@angular/core';
import{ DataService } from '../data.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
pageTitleCrud= 'CRUD Table Display data From DB';
Datalists: any[];
constructor(private _dataService: DataService) {
// private _dataService:DataService
}

  ngOnInit(): void {
     this.Datalists = this._dataService.getDataLists();
  }

}
