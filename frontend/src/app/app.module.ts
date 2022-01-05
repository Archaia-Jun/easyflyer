import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // for two way biding
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    
  ],
    

  imports: [
    BrowserModule,
    FormsModule,
    NgxJsonViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/* TODO:

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
# for interpolation (to insert data from typescript into template, work with variables and methods): 

in module folder, for exmaple cart-module: in cart-module.html we can have this markup:

String Interpolation:
--------------

<h4> Cart: {{ cartId }} -- Status: {{ getStatus() }} </h4>

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
# for property binding (an other way to insert data from type script into HTML template) :
modify data by event.

Property binding, Event binding:
-----------------

<button class="btn btn-success">
[disabled]: "!isAuth"                                           => bind to property
(click):"onClick()"> Register the cart </button>                => bind to event.


#two-way binding:

in cart-module.html:
<input type:"text" class:"form-control" [(ngModel)]="whatWeWantedToBindTo">


# Directives:

ngIf, ngFor, ngStyle, ngClass









*/