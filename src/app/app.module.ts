import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Header1Component } from './header1/header1.component';
import { Header2Component } from './header2/header2.component';
import { Header3Component } from './header3/header3.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeService } from './employee.service';

const appRoutes: Routes = [
  { path: 'home', component: Header1Component },
  { path: 'news', component: Header2Component },
  { path: 'contact', component: Header3Component },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Header1Component,
    Header2Component,
    Header3Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes) ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
