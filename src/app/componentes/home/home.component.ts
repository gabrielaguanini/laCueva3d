import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
//LISTA PARA SLIDER DEL MODAL
type listaImg = Array<{id:number, src:string}>


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

//MODAL
bsModalRef!: BsModalRef;

//LISTA PARA SLIDER DEL MODAL

arrayListaBustos: listaImg = [];
arrayListComb: listaImg = [];
arrayListFigCo: listaImg = [];
arrayListPicadores: listaImg = [];
arrayListPortaJoy: listaImg = [];
arrayListVarios: listaImg = [];


constructor(private modalService:BsModalService){};

ngOnInit(){

//LISTAS PARA SLIDER DEL MODAL 
  this.arrayListaBustos = [
    {id:1, src:"../assets/imagenes/bustos/batman1.jpeg"},
    {id:2, src:"../assets/imagenes/bustos/batman2.jpeg"},
    {id:3, src:"../assets/imagenes/bustos/batman3.jpeg"},
    {id:4, src:"../assets/imagenes/bustos/batman4.jpeg"},
    {id:5, src:"../assets/imagenes/bustos/frankenstein1.jpeg"},
    {id:6, src:"../assets/imagenes/bustos/frankenstein2.jpeg"},
    {id:7, src:"../assets/imagenes/bustos/frankenstein3.jpeg"},
    {id:8, src:"../assets/imagenes/bustos/frankenstein4.jpeg"},
    {id:9, src:"../assets/imagenes/bustos/frankenstein5.jpeg"},
    {id:10, src:"../assets/imagenes/bustos/tortugarafael1.jpeg"},
    {id:11, src:"../assets/imagenes/bustos/tortugarafael2.jpeg"},
    {id:12, src:"../assets/imagenes/bustos/tortugarafael3.jpeg"},
    {id:13, src:"../assets/imagenes/bustos/tortugarafael4.jpeg"},
    {id:14, src:"../assets/imagenes/bustos/tortugarafael5.jpeg"},
    {id:15, src:"../assets/imagenes/bustos/tortugarafael6.jpeg"},
    {id:16, src:"../assets/imagenes/bustos/tortugarafael7.jpeg"}
  ];
  this.arrayListComb = [
    {id:16, src:"../assets/imagenes/combinados/t800comb.jpeg"},
    {id:16, src:"../assets/imagenes/combinados/t800comb1.jpeg"},
    {id:16, src:"../assets/imagenes/combinados/termint8001.jpeg"},
    {id:16, src:"../assets/imagenes/combinados/termint8002.jpeg"},
    {id:16, src:"../assets/imagenes/combinados/termint8003.jpeg"},
    {id:16, src:"../assets/imagenes/combinados/termint8004.jpeg"},
    {id:16, src:"../assets/imagenes/combinados/termint8005.jpeg"},
    {id:16, src:"../assets/imagenes/combinados/termint8006.jpeg"},
    {id:16, src:"../assets/imagenes/combinados/termint8007.jpeg"},
    {id:16, src:"../assets/imagenes/combinados/termint8008.jpeg"},
    {id:16, src:"../assets/imagenes/combinados/termint8009.jpeg"},
    {id:16, src:"../assets/imagenes/combinados/torleonarfrank1.jpeg"},
    {id:16, src:"../assets/imagenes/combinados/torleonarfrank2.jpeg"},
    {id:16, src:"../assets/imagenes/combinados/torleonarfrank3.jpeg"}
  ];
  this.arrayListFigCo= [
    {id:16, src:"../assets/imagenes/figurascoleccionismo/flanders1.jpeg"},
    {id:16, src:"../assets/imagenes/figurascoleccionismo/flanders2.jpeg"},
    {id:16, src:"../assets/imagenes/figurascoleccionismo/flanders3.jpeg"},
    {id:16, src:"../assets/imagenes/figurascoleccionismo/flanders4.jpeg"},
    {id:16, src:"../assets/imagenes/figurascoleccionismo/flanders5.jpeg"},
    {id:16, src:"../assets/imagenes/figurascoleccionismo/flanders6.jpeg"},
    {id:16, src:"../assets/imagenes/figurascoleccionismo/luffy1.jpeg"},
    {id:16, src:"../assets/imagenes/figurascoleccionismo/luffy10.jpeg"},
    {id:16, src:"../assets/imagenes/figurascoleccionismo/luffy11.jpeg"},
    {id:16, src:"../assets/imagenes/figurascoleccionismo/luffy12.jpeg"},
    {id:16, src:"../assets/imagenes/figurascoleccionismo/luffy13.jpeg"},
    {id:16, src:"../assets/imagenes/figurascoleccionismo/luffy2.jpeg"},
    {id:16, src:"../assets/imagenes/figurascoleccionismo/luffy3.jpeg"},
    {id:16, src:"../assets/imagenes/figurascoleccionismo/luffy4.jpeg"},
    {id:16, src:"../assets/imagenes/figurascoleccionismo/luffy5.jpeg"},
    {id:16, src:"../assets/imagenes/figurascoleccionismo/luffy6.jpeg"},
    {id:16, src:"../assets/imagenes/figurascoleccionismo/luffy7.jpeg"},
    {id:16, src:"../assets/imagenes/figurascoleccionismo/luffy8.jpeg"},
    {id:16, src:"../assets/imagenes/figurascoleccionismo/luffy9.jpeg"},
    {id:16, src:"../assets/imagenes/figurascoleccionismo/quicksilver.jpeg"},
    {id:16, src:"../assets/imagenes/figurascoleccionismo/quicksilver1.jpeg"},
    {id:16, src:"../assets/imagenes/figurascoleccionismo/quicksilver2.jpeg"},
    {id:16, src:"../assets/imagenes/figurascoleccionismo/quicksilver3.jpeg"},
    {id:16, src:"../assets/imagenes/figurascoleccionismo/quicksilver4.jpeg"},
    {id:16, src:"../assets/imagenes/figurascoleccionismo/tortugaleonardo1.jpeg"},
    {id:16, src:"../assets/imagenes/figurascoleccionismo/tortugaleonardo2.jpeg"},
    {id:16, src:"../assets/imagenes/figurascoleccionismo/tortugaleonardo3.jpeg"},
    {id:16, src:"../assets/imagenes/figurascoleccionismo/tortugaleonardo4.jpeg"}
  ];
  this.arrayListPicadores = [
    {id:16, src:"../assets/imagenes/picadores/picador1.jpeg"},
    {id:16, src:"../assets/imagenes/picadores/picador2.jpeg"},
    {id:16, src:"../assets/imagenes/picadores/picador3.jpeg"},
    {id:16, src:"../assets/imagenes/picadores/picador4.jpeg"},
    {id:16, src:"../assets/imagenes/picadores/picador5.jpeg"},
    {id:16, src:"../assets/imagenes/picadores/picador6.jpeg"},
    {id:16, src:"../assets/imagenes/picadores/picador7.jpeg"},
    {id:16, src:"../assets/imagenes/picadores/picador8.jpeg"},
    {id:16, src:"../assets/imagenes/picadores/picador9.jpeg"}
  ];
  this.arrayListPortaJoy  = [
    {id:16, src:"../assets/imagenes/portajoystick/darthvader1.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/darthvader2.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/darthvader3.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/ironmaiden.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/ironmaiden1.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/ironmaiden2.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/ironmaiden3.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/ironmaiden4.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/ironmaiden5.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/ironmaiden6.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/manozombie.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/manozombie1.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/manozombie10.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/manozombie11.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/manozombie12.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/manozombie13.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/manozombie14.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/manozombie15.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/manozombie16.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/manozombie17.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/manozombie18.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/manozombie2.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/manozombie3.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/manozombie4.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/manozombie5.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/manozombie6.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/manozombie7.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/manozombie8.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/manozombie9.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/morty.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/morty1.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/morty2.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/morty3.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/rick.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/rick1.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/rick2.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/rick3.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/rick4.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/rickandmorty.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/rickandmorty1.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/rickandmorty10.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/rickandmorty11.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/rickandmorty12.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/rickandmorty13.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/rickandmorty2.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/rickandmorty3.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/rickandmorty4.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/rickandmorty5.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/rickandmorty6.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/rickandmorty7.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/rickandmorty8.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/rickandmorty9.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/ryu.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/ryu1.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/ryu2.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/ryu3.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/ryu4.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/ryu5.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/ryu6.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/spiderman.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/spiderman1.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/spiderman2.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/spiderman3.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/spiderman4.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/terminator.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/terminator1.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/terminator2.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/terminator3.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/terminator4.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/terminator5.jpeg"},
    {id:16, src:"../assets/imagenes/portajoystick/terminator6.jpeg"}
  ];
  this.arrayListVarios = [
    {id:16, src:"../assets/imagenes/varios/t8001.jpeg"},
    {id:16, src:"../assets/imagenes/varios/t80010.jpeg"},
    {id:16, src:"../assets/imagenes/varios/t80011.jpeg"},
    {id:16, src:"../assets/imagenes/varios/t8002.jpeg"},
    {id:16, src:"../assets/imagenes/varios/t8003.jpeg"},
    {id:16, src:"../assets/imagenes/varios/t8004.jpeg"},
    {id:16, src:"../assets/imagenes/varios/t8005.jpeg"},
    {id:16, src:"../assets/imagenes/varios/t8006.jpeg"},
    {id:16, src:"../assets/imagenes/varios/t8007.jpeg"},
    {id:16, src:"../assets/imagenes/varios/t8008.jpeg"},
    {id:16, src:"../assets/imagenes/varios/t8009.jpeg"},
  ];
};

//MODAL
openModal(templateModalSlider: TemplateRef<any>){
    this.bsModalRef = this.modalService.show(templateModalSlider);
  }


   
}
