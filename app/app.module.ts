import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { CategoriesComponent } from './categories/categories.component';
import { CrudComponent } from './crud/crud.component';
import { CrudpopupComponent } from './crudpopup/crudpopup.component';
import { CoursetroexamplesComponent } from './coursetroexamples/coursetroexamples.component';
import { DataService } from './data.service';
import { LoginModule } from './login/login.module';
import { LogindetailsComponent } from './logindetails/logindetails.component';
import { StarComponent } from './shared/star.component';
import { CrudAPIComponent } from './crud-api/crud-api.component';
import { APIDataService } from "./crud-api/APIdata.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    SigninComponent,
    SignupComponent,
    CategoriesComponent,
    CrudComponent,
    CrudpopupComponent,
    CoursetroexamplesComponent,
    LogindetailsComponent,
    StarComponent,
    CrudAPIComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    LoginModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'Categories', component: CategoriesComponent},
      {path: 'Contactus', component: ContactusComponent},
      {path: 'crud', component: CrudComponent},
      {path: 'crudpopup', component: CrudpopupComponent},
      {path: 'Coursetroexamples', component: CoursetroexamplesComponent},
      {path: 'Logindetails', component: LogindetailsComponent},
      {path: 'CrudAPI', component: CrudAPIComponent}
    ], {useHash: false})
  ],
  providers: [DataService,APIDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
