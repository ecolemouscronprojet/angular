import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TableMultiplicationComponent } from './table-multiplication/table-multiplication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MyButtonComponent,
    ToDoListComponent,
    TableMultiplicationComponent,
    DashboardComponent,
    ContactComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
