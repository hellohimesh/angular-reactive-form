import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Http} from '@angular/http';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {CrudService} from './crud.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes),
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
