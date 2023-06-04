import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeComponent } from './componentes/home/home.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida/bienvenida.component';
import { AppRoutingModule } from './rutas/app-routing.module';
import { FooterComponent } from './componentes/footer/footer/footer.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BienvenidaComponent,
    FooterComponent
   ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    AppRoutingModule   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
