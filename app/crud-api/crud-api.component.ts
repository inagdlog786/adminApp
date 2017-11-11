import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/Http';
import { APIDataService } from "./APIdata.service";
import { Products } from './modalProductApi';
import { Observable } from "rxjs/Observable";


@Component({
  selector: 'app-crud-api',
  templateUrl: './crud-api.component.html',
  styleUrls: ['./crud-api.component.scss']
})
export class CrudAPIComponent implements OnInit {
  EditProductId: string;
  alert: boolean = false;
  alertGrid:boolean=false;
  StatusMesage:string;
  GridStatusMesage:string="Delete data succesfully";
  StatusProducts: string = "Add Product";
  SaveStatus:string="Save";
  model=new Products();
  Products: any[];
  constructor(private apiDataService: APIDataService) { }
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.apiDataService.getProductDetails().then(Products => this.Products = Products);
  }
  postProduct(action):void {
    if(action=='Save'){
       this.apiDataService.postProductDetails(this.model).then(res=>{
      this.StatusMesage=res;});
    }
    if(action=='Update'){
      this.apiDataService.putProductDetails(this.model).then(res=>{
      this.StatusMesage=res;
    });
  }
    this.clearValues();
    this.alert=true;
    this.gridLoad();
  }
  addProduct(){
    this.alert = false;
    this.StatusProducts="Add Product";
    this.SaveStatus="Save";
    this.alertGrid=false;
    this.EditProductId="";
    this.clearValues();
  }
  editProduct(item):void{
    this.alert = false;
    this.StatusProducts='Edit Product Order is';
    this.EditProductId=`${item.ID}`;
    this.SaveStatus="Update";
    this.alertGrid=false;
    this.model=item;
  }
  deleteProduct(id):void{
    this.apiDataService.deleteProductDetails(id).then(res=>{
      this.GridStatusMesage=res;
    });
    this.gridLoad();
    this.alertGrid=true;
  }
  clearValues(){
    this.model=new Products();
  }
  gridLoad(){
    let timer = Observable.timer(1000, 2000);
    timer.subscribe(() => this.getProducts());
  }
  closeAlert(){
    this.alertGrid=false;
  }

}
