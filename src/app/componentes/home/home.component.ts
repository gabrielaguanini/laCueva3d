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



arrayListBustBatman: listaImg = [];
arrayListBustFranke: listaImg = [];
arrayListBustTortu: listaImg = [];
arrayListCombT800: listaImg = [];
arrayListCombTerminator: listaImg = [];
arrayListCombtorleonarfrank: listaImg = [];
arrayListFigCoFlanders: listaImg = [];
arrayListFigCoLuffy: listaImg = [];
arrayListFigQuickSi: listaImg = [];
arrayListtortugaleo: listaImg = [];
arrayListPicadores: listaImg = [];
arrayListPortaJoydarthv: listaImg = [];
arrayListPortaJoymanozom: listaImg = [];
arrayListPortaJoyironmai: listaImg = [];
arrayListPortaJoyMorty: listaImg = [];
arrayListPortaJoyRick: listaImg = [];
arrayListPortaJoyrickandmorty: listaImg = [];
arrayListPortaJoyryu: listaImg = [];
arrayListPortaJoyspider: listaImg = [];

arrayListVarios: listaImg = [];




constructor(private modalService:BsModalService){

};

ngOnInit(){

//LISTAS PARA SLIDER DEL MODAL 

///////Bustos
  this.arrayListBustBatman = [
    {id:1, src:"../assets/imagenes/bustos/batman1.jpeg"},
    {id:2, src:"../assets/imagenes/bustos/batman2.jpeg"},
    {id:3, src:"../assets/imagenes/bustos/batman3.jpeg"},
    {id:4, src:"../assets/imagenes/bustos/batman4.jpeg"}
  ];
  this.arrayListBustFranke = [
    {id:5, src:"../assets/imagenes/bustos/frankenstein1.jpeg"},
    {id:6, src:"../assets/imagenes/bustos/frankenstein2.jpeg"},
    {id:7, src:"../assets/imagenes/bustos/frankenstein3.jpeg"},
    {id:8, src:"../assets/imagenes/bustos/frankenstein4.jpeg"},
    {id:9, src:"../assets/imagenes/bustos/frankenstein5.jpeg"}
  ];
  this.arrayListBustTortu = [
    {id:10, src:"../assets/imagenes/bustos/tortugarafael1.jpeg"},
    {id:11, src:"../assets/imagenes/bustos/tortugarafael2.jpeg"},
    {id:12, src:"../assets/imagenes/bustos/tortugarafael3.jpeg"},
    {id:13, src:"../assets/imagenes/bustos/tortugarafael4.jpeg"},
    {id:14, src:"../assets/imagenes/bustos/tortugarafael5.jpeg"},
    {id:15, src:"../assets/imagenes/bustos/tortugarafael6.jpeg"},
    {id:16, src:"../assets/imagenes/bustos/tortugarafael7.jpeg"}
  ];
  ///////Combinados
  this.arrayListCombT800 = [
    {id:17, src:"../assets/imagenes/combinados/t800comb.jpeg"},
    {id:18, src:"../assets/imagenes/combinados/t800comb1.jpeg"}
  ];
  this.arrayListCombTerminator = [
    {id:19, src:"../assets/imagenes/combinados/termint8001.jpeg"},
    {id:20, src:"../assets/imagenes/combinados/termint8002.jpeg"},
    {id:21, src:"../assets/imagenes/combinados/termint8003.jpeg"},
    {id:22, src:"../assets/imagenes/combinados/termint8004.jpeg"},
    {id:23, src:"../assets/imagenes/combinados/termint8005.jpeg"},
    {id:24, src:"../assets/imagenes/combinados/termint8006.jpeg"},
    {id:25, src:"../assets/imagenes/combinados/termint8007.jpeg"},
    {id:26, src:"../assets/imagenes/combinados/termint8008.jpeg"},
    {id:27, src:"../assets/imagenes/combinados/termint8009.jpeg"}
  ];
  this.arrayListCombtorleonarfrank = [
    {id:28, src:"../assets/imagenes/combinados/torleonarfrank1.jpeg"},
    {id:29, src:"../assets/imagenes/combinados/torleonarfrank2.jpeg"},
    {id:30, src:"../assets/imagenes/combinados/torleonarfrank3.jpeg"}
  ];
  ///////Figuras de Coleccionismo
  this.arrayListFigCoFlanders = [
    {id:31, src:"../assets/imagenes/figurascoleccionismo/flanders1.jpeg"},
    {id:32, src:"../assets/imagenes/figurascoleccionismo/flanders2.jpeg"},
    {id:33, src:"../assets/imagenes/figurascoleccionismo/flanders3.jpeg"},
    {id:34, src:"../assets/imagenes/figurascoleccionismo/flanders4.jpeg"},
    {id:35, src:"../assets/imagenes/figurascoleccionismo/flanders5.jpeg"},
    {id:36, src:"../assets/imagenes/figurascoleccionismo/flanders6.jpeg"}
  ];
  this.arrayListFigCoLuffy = [
    {id:37, src:"../assets/imagenes/figurascoleccionismo/luffy1.jpeg"},
    {id:38, src:"../assets/imagenes/figurascoleccionismo/luffy10.jpeg"},
    {id:39, src:"../assets/imagenes/figurascoleccionismo/luffy11.jpeg"},
    {id:40, src:"../assets/imagenes/figurascoleccionismo/luffy12.jpeg"},
    {id:41, src:"../assets/imagenes/figurascoleccionismo/luffy13.jpeg"},
    {id:42, src:"../assets/imagenes/figurascoleccionismo/luffy2.jpeg"},
    {id:43, src:"../assets/imagenes/figurascoleccionismo/luffy3.jpeg"},
    {id:45, src:"../assets/imagenes/figurascoleccionismo/luffy4.jpeg"},
    {id:46, src:"../assets/imagenes/figurascoleccionismo/luffy5.jpeg"},
    {id:47, src:"../assets/imagenes/figurascoleccionismo/luffy6.jpeg"},
    {id:48, src:"../assets/imagenes/figurascoleccionismo/luffy7.jpeg"},
    {id:49, src:"../assets/imagenes/figurascoleccionismo/luffy8.jpeg"},
    {id:50, src:"../assets/imagenes/figurascoleccionismo/luffy9.jpeg"}
  ];
  this.arrayListFigQuickSi = [
    {id:51, src:"../assets/imagenes/figurascoleccionismo/quicksilver.jpeg"},
    {id:52, src:"../assets/imagenes/figurascoleccionismo/quicksilver1.jpeg"},
    {id:53, src:"../assets/imagenes/figurascoleccionismo/quicksilver2.jpeg"},
    {id:54, src:"../assets/imagenes/figurascoleccionismo/quicksilver3.jpeg"},
    {id:55, src:"../assets/imagenes/figurascoleccionismo/quicksilver4.jpeg"}
  ];
  this.arrayListtortugaleo = [
    {id:56, src:"../assets/imagenes/figurascoleccionismo/tortugaleonardo1.jpeg"},
    {id:57, src:"../assets/imagenes/figurascoleccionismo/tortugaleonardo2.jpeg"},
    {id:58, src:"../assets/imagenes/figurascoleccionismo/tortugaleonardo3.jpeg"},
    {id:59, src:"../assets/imagenes/figurascoleccionismo/tortugaleonardo4.jpeg"}
  ];
  ///////Picadores
  this.arrayListPicadores = [
    {id:60, src:"../assets/imagenes/picadores/picador1.jpeg"},
    {id:61, src:"../assets/imagenes/picadores/picador2.jpeg"},
    {id:62, src:"../assets/imagenes/picadores/picador3.jpeg"},
    {id:63, src:"../assets/imagenes/picadores/picador4.jpeg"},
    {id:64, src:"../assets/imagenes/picadores/picador5.jpeg"},
    {id:65, src:"../assets/imagenes/picadores/picador6.jpeg"},
    {id:66, src:"../assets/imagenes/picadores/picador7.jpeg"},
    {id:67, src:"../assets/imagenes/picadores/picador8.jpeg"},
    {id:68, src:"../assets/imagenes/picadores/picador9.jpeg"}
  ];
  ///////PortaJoyStick
  this.arrayListPortaJoydarthv  = [
    {id:69, src:"../assets/imagenes/portajoystick/darthvader1.jpeg"},
    {id:70, src:"../assets/imagenes/portajoystick/darthvader2.jpeg"},
    {id:71, src:"../assets/imagenes/portajoystick/darthvader3.jpeg"}
  ];
  this.arrayListPortaJoyironmai  = [
    {id:72, src:"../assets/imagenes/portajoystick/ironmaiden.jpeg"},
    {id:73, src:"../assets/imagenes/portajoystick/ironmaiden1.jpeg"},
    {id:74, src:"../assets/imagenes/portajoystick/ironmaiden2.jpeg"},
    {id:75, src:"../assets/imagenes/portajoystick/ironmaiden3.jpeg"},
    {id:76, src:"../assets/imagenes/portajoystick/ironmaiden4.jpeg"},
    {id:77, src:"../assets/imagenes/portajoystick/ironmaiden5.jpeg"},
    {id:78, src:"../assets/imagenes/portajoystick/ironmaiden6.jpeg"}
  ];
  this.arrayListPortaJoymanozom = [
    {id:79, src:"../assets/imagenes/portajoystick/manozombie.jpeg"},
    {id:80, src:"../assets/imagenes/portajoystick/manozombie1.jpeg"},
    {id:81, src:"../assets/imagenes/portajoystick/manozombie10.jpeg"},
    {id:82, src:"../assets/imagenes/portajoystick/manozombie11.jpeg"},
    {id:83, src:"../assets/imagenes/portajoystick/manozombie12.jpeg"},
    {id:84, src:"../assets/imagenes/portajoystick/manozombie13.jpeg"},
    {id:85, src:"../assets/imagenes/portajoystick/manozombie14.jpeg"},
    {id:86, src:"../assets/imagenes/portajoystick/manozombie15.jpeg"},
    {id:87, src:"../assets/imagenes/portajoystick/manozombie16.jpeg"},
    {id:88, src:"../assets/imagenes/portajoystick/manozombie17.jpeg"},
    {id:89, src:"../assets/imagenes/portajoystick/manozombie18.jpeg"},
    {id:90, src:"../assets/imagenes/portajoystick/manozombie2.jpeg"},
    {id:91, src:"../assets/imagenes/portajoystick/manozombie3.jpeg"},
    {id:92, src:"../assets/imagenes/portajoystick/manozombie4.jpeg"},
    {id:93, src:"../assets/imagenes/portajoystick/manozombie5.jpeg"},
    {id:94, src:"../assets/imagenes/portajoystick/manozombie6.jpeg"},
    {id:95, src:"../assets/imagenes/portajoystick/manozombie7.jpeg"},
    {id:96, src:"../assets/imagenes/portajoystick/manozombie8.jpeg"},
    {id:97, src:"../assets/imagenes/portajoystick/manozombie9.jpeg"}
  ];
this.arrayListPortaJoyMorty = [
    {id:98, src:"../assets/imagenes/portajoystick/morty.jpeg"},
    {id:99, src:"../assets/imagenes/portajoystick/morty1.jpeg"},
    {id:100, src:"../assets/imagenes/portajoystick/morty2.jpeg"},
    {id:101, src:"../assets/imagenes/portajoystick/morty3.jpeg"}
  ];
this.arrayListPortaJoyRick = [
    {id:102, src:"../assets/imagenes/portajoystick/rick.jpeg"},
    {id:103, src:"../assets/imagenes/portajoystick/rick1.jpeg"},
    {id:104, src:"../assets/imagenes/portajoystick/rick2.jpeg"},
    {id:105, src:"../assets/imagenes/portajoystick/rick3.jpeg"},
    {id:106, src:"../assets/imagenes/portajoystick/rick4.jpeg"}
  ];
this.arrayListPortaJoyrickandmorty = [
    {id:107, src:"../assets/imagenes/portajoystick/rickandmorty.jpeg"},
    {id:108, src:"../assets/imagenes/portajoystick/rickandmorty1.jpeg"},
    {id:109, src:"../assets/imagenes/portajoystick/rickandmorty10.jpeg"},
    {id:110, src:"../assets/imagenes/portajoystick/rickandmorty11.jpeg"},
    {id:111, src:"../assets/imagenes/portajoystick/rickandmorty12.jpeg"},
    {id:112, src:"../assets/imagenes/portajoystick/rickandmorty13.jpeg"},
    {id:113, src:"../assets/imagenes/portajoystick/rickandmorty2.jpeg"},
    {id:114, src:"../assets/imagenes/portajoystick/rickandmorty3.jpeg"},
    {id:115, src:"../assets/imagenes/portajoystick/rickandmorty4.jpeg"},
    {id:116, src:"../assets/imagenes/portajoystick/rickandmorty5.jpeg"},
    {id:117, src:"../assets/imagenes/portajoystick/rickandmorty6.jpeg"},
    {id:118, src:"../assets/imagenes/portajoystick/rickandmorty7.jpeg"},
    {id:119, src:"../assets/imagenes/portajoystick/rickandmorty8.jpeg"},
    {id:120, src:"../assets/imagenes/portajoystick/rickandmorty9.jpeg"}
  ];
  this.arrayListPortaJoyryu = [
    {id:121, src:"../assets/imagenes/portajoystick/ryu.jpeg"},
    {id:122, src:"../assets/imagenes/portajoystick/ryu1.jpeg"},
    {id:123, src:"../assets/imagenes/portajoystick/ryu2.jpeg"},
    {id:124, src:"../assets/imagenes/portajoystick/ryu3.jpeg"},
    {id:125, src:"../assets/imagenes/portajoystick/ryu4.jpeg"},
    {id:126, src:"../assets/imagenes/portajoystick/ryu5.jpeg"},
    {id:127, src:"../assets/imagenes/portajoystick/ryu6.jpeg"}
  ];
  this.arrayListPortaJoyspider = [
    {id:128, src:"../assets/imagenes/portajoystick/spidermanUno.jpeg"},
    {id:129, src:"../assets/imagenes/portajoystick/spiderman.jpeg"},
    {id:130, src:"../assets/imagenes/portajoystick/spiderman2.jpeg"},
    {id:131, src:"../assets/imagenes/portajoystick/spiderman3.jpeg"},
    {id:132, src:"../assets/imagenes/portajoystick/spiderman4.jpeg"},
    {id:133, src:"../assets/imagenes/portajoystick/terminator.jpeg"},
    {id:134, src:"../assets/imagenes/portajoystick/terminator1.jpeg"},
    {id:135, src:"../assets/imagenes/portajoystick/terminator2.jpeg"},
    {id:136, src:"../assets/imagenes/portajoystick/terminator3.jpeg"},
    {id:137, src:"../assets/imagenes/portajoystick/terminator4.jpeg"},
    {id:138, src:"../assets/imagenes/portajoystick/terminator5.jpeg"},
    {id:139, src:"../assets/imagenes/portajoystick/terminator6.jpeg"}
  ];
  this.arrayListVarios = [
    {id:140, src:"../assets/imagenes/varios/t8001.jpeg"},
    {id:141, src:"../assets/imagenes/varios/t80010.jpeg"},
    {id:142, src:"../assets/imagenes/varios/t80011.jpeg"},
    {id:143, src:"../assets/imagenes/varios/t8002.jpeg"},
    {id:144, src:"../assets/imagenes/varios/t8003.jpeg"},
    {id:145, src:"../assets/imagenes/varios/t8004.jpeg"},
    {id:146, src:"../assets/imagenes/varios/t8005.jpeg"},
    {id:147, src:"../assets/imagenes/varios/t8006.jpeg"},
    {id:148, src:"../assets/imagenes/varios/t8007.jpeg"},
    {id:149, src:"../assets/imagenes/varios/t8008.jpeg"},
    {id:150, src:"../assets/imagenes/varios/t8009.jpeg"},
  ];



};

//MODAL
openModal(templateModalSlider: TemplateRef<any>){
  this.bsModalRef = this.modalService.show(templateModalSlider);
}


}
   
