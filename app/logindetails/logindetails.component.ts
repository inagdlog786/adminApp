import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StarComponent } from '../shared/star.component';

@Component({
  selector: 'app-logindetails',
  templateUrl: './logindetails.component.html',
  styleUrls: ['./logindetails.component.scss']
})

export class LogindetailsComponent {
  showTable= true;
  pageTitleLoginDetails = 'Total Users List';
  listFilter= 'Nagarjuna';
  lists: any[] = [
      {
          'ID': 1,
          'UserName': 'Nagarjuna',
          'Password': 'Nagarjuna'
      },
      {
          'ID': 4,
          'UserName': 'test',
          'Password': 'test'
      },
      {
          'ID': 6,
          'UserName': 'test',
          'Password': 'sdasd'
      },
      {
          'ID': 7,
          'UserName': 'test',
          'Password': 'Nagarjuna'
      },
      {
          'ID': 8,
          'UserName': 'Durga',
          'Password': 'Durga'
      }
  ];
  toggleImage(): void{
    this.showTable = !this.showTable;
  }
  onRatingClicked(message: string): void {
      this.pageTitleLoginDetails = 'Rating ' + message;

  }

}
