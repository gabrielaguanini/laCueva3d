import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { BienvenidaComponent } from '../componentes/bienvenida/bienvenida/bienvenida.component';
import { HomeComponent } from '../componentes/home/home.component';
import { FooterComponent } from '../componentes/footer/footer/footer.component';

const routes: Routes = [

  {path: 'bienvenida', component: BienvenidaComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'bienvenida', pathMatch: 'full'},
  {path: 'footer', component: FooterComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


