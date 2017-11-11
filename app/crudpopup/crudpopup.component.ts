import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from "../data.service";

@Component({
  selector: 'app-crudpopup',
  templateUrl: './crudpopup.component.html',
  styleUrls: ['./crudpopup.component.scss']
})
export class CrudpopupComponent implements OnInit {
  errorMessage: any;


loginDetails:any[];
  constructor(private _dataService: DataService) {
// private _dataService:DataService
}

  ngOnInit(): void {
    //  this.loginDetails = this._dataService.getloginDetails();
    this._dataService.getloginDetails()
    .subscribe(
      loginDetails => this.loginDetails=loginDetails,
      error =>this.errorMessage = <any>error
      );
  }

}
