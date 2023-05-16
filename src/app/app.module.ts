import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeComponent } from './componentes/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
   ],
  imports: [
    BrowserModule,
    ModalModule.forRoot()
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
