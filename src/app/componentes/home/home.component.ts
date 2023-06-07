import { Component, ElementRef, TemplateRef, ViewChild} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


//////####### LISTA PARA SLIDER DEL MODAL #######//////
type listaImg = Array<{id:number, src:string}>



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

//////####### NAVBAR #######//////
isExpanded: boolean = false;


//////####### MODAL #######//////
bsModalRef!: BsModalRef;

 //////####### VARIABLES PARA PONER PRIMER FOTO EN CARDS CON IMAGENES Y TEMPLATES #######//////

 //Variables para Cards con imagenes y ModalCards 1 al 6 --- PortaJoyStick
 img1:string= "./assets/imagenes/portajoystick/darthvader1.jpeg";
 img2: String = './assets/imagenes/portajoystick/ironmaiden1.jpeg';
 img3: String = './assets/imagenes/portajoystick/spidermanUno.jpeg';
 img4: String = './assets/imagenes/portajoystick/ryu1.jpeg';
 img5: String = './assets/imagenes/portajoystick/terminator1.jpeg';
 img6: String = './assets/imagenes/portajoystick/rick1.jpeg';
 
//Variables para Cards con imagenes y ModalCards 7 al 12 ---Figuras de Coleccionismo
 img7: String = './assets/imagenes/figurascoleccionismo/quicksilver.jpeg';
 img8: String = './assets/imagenes/figurascoleccionismo/luffy5.jpeg';
 img9: String = './assets/imagenes/figurascoleccionismo/tortugaleonardo3.jpeg';
 img10: String = './assets/imagenes/figurascoleccionismo/dragonball1.jpeg';
 img11: String = './assets/imagenes/figurascoleccionismo/quicksilver4.jpeg';
 img12: String = './assets/imagenes/figurascoleccionismo/flanders4.jpeg';
 //Variables para Cards con imagenes y ModalCards 13 al 18 ---Picadores (actualmente retirado o comentado)
 img13: String = './assets/imagenes/picadores/picador3.jpeg';
 img14: String = './assets/imagenes/picadores/picador1.jpeg';
 img15: String = './assets/imagenes/picadores/picador2.jpeg';
 img16: String = this.img13;
 img17: String = this.img14;
 img18: String = this.img15;
  //ArrayList ModalCards 19 al 24 ---VARIOS
 img19: String = './assets/imagenes/bustos/batman4.jpeg';
 img20: String = './assets/imagenes/picadores/picador1.jpeg';
 img21: String = './assets/imagenes/bustos/frankenstein3.jpeg';
 img22: String = './assets/imagenes/bustos/frankenstein4.jpeg';
 img23: String = './assets/imagenes/bustos/tortugarafael4.jpeg';
 img24: String = './assets/imagenes/varios/t80011.jpeg';

//////####### LISTAS PARA SLIDER DEL MODAL #######//////
arrayListModalCard1: listaImg   = [    
  {id:70, src:"../assets/imagenes/portajoystick/darthvaderDos.jpeg"},
  {id:71, src:"../assets/imagenes/portajoystick/darthvader3.jpeg"}
];
arrayListModalCard2: listaImg   = [    
  {id:73, src:"../assets/imagenes/portajoystick/ironmaiden.jpeg"},
  {id:74, src:"../assets/imagenes/portajoystick/ironmaiden2.jpeg"},
  {id:76, src:"../assets/imagenes/portajoystick/ironmaiden4.jpeg"},
  {id:78, src:"../assets/imagenes/portajoystick/ironmaiden6.jpeg"}
];
arrayListModalCard3: listaImg   = [    
  {id:129, src:"../assets/imagenes/portajoystick/spiderman.jpeg"},
  {id:130, src:"../assets/imagenes/portajoystick/spiderman2.jpeg"},
  {id:131, src:"../assets/imagenes/portajoystick/spiderman3.jpeg"},
  {id:132, src:"../assets/imagenes/portajoystick/spiderman4.jpeg"}
];

arrayListModalCard4: listaImg   = [    
  {id:122, src:"../assets/imagenes/portajoystick/ryu.jpeg"},
  {id:123, src:"../assets/imagenes/portajoystick/ryu2.jpeg"},
  {id:125, src:"../assets/imagenes/portajoystick/ryu4.jpeg"},
  {id:126, src:"../assets/imagenes/portajoystick/ryu5.jpeg"},
  {id:127, src:"../assets/imagenes/portajoystick/ryu6.jpeg"}
];
arrayListModalCard5: listaImg   = [    
  {id:134, src:"../assets/imagenes/portajoystick/terminator.jpeg"},
  {id:135, src:"../assets/imagenes/portajoystick/terminator2.jpeg"},
  {id:136, src:"../assets/imagenes/portajoystick/terminator3.jpeg"},
  {id:137, src:"../assets/imagenes/portajoystick/terminator4.jpeg"},
  {id:138, src:"../assets/imagenes/portajoystick/terminator5.jpeg"},
  {id:139, src:"../assets/imagenes/portajoystick/terminator6.jpeg"}
];
arrayListModalCard6: listaImg   = [    
  {id:102, src:"../assets/imagenes/portajoystick/rick.jpeg"},
  {id:103, src:"../assets/imagenes/portajoystick/rick1.jpeg"},
  {id:104, src:"../assets/imagenes/portajoystick/rick2.jpeg"},
  {id:105, src:"../assets/imagenes/portajoystick/rick3.jpeg"},
  {id:106, src:"../assets/imagenes/portajoystick/rick4.jpeg"}
];

 ///////ArrayList ModalCards 7 al 12 ---Figuras de Coleccionismo

arrayListModalCard7: listaImg   = [    
  {id:53, src:"../assets/imagenes/figurascoleccionismo/quicksilver2.jpeg"},
  {id:54, src:"../assets/imagenes/figurascoleccionismo/quicksilver3.jpeg"},
  {id:55, src:"../assets/imagenes/figurascoleccionismo/quicksilver4.jpeg"}
];
arrayListModalCard8: listaImg   = [    
  {id:38, src:"../assets/imagenes/figurascoleccionismo/luffy10.jpeg"},
  {id:39, src:"../assets/imagenes/figurascoleccionismo/luffy11.jpeg"},
  {id:40, src:"../assets/imagenes/figurascoleccionismo/luffy12.jpeg"},
  {id:41, src:"../assets/imagenes/figurascoleccionismo/luffy13.jpeg"},
  {id:42, src:"../assets/imagenes/figurascoleccionismo/luffy2.jpeg"},
  {id:43, src:"../assets/imagenes/figurascoleccionismo/luffy3.jpeg"},
  {id:37, src:"../assets/imagenes/figurascoleccionismo/luffy1.jpeg"},
  {id:47, src:"../assets/imagenes/figurascoleccionismo/luffy6.jpeg"},
  {id:48, src:"../assets/imagenes/figurascoleccionismo/luffy7.jpeg"},
  {id:49, src:"../assets/imagenes/figurascoleccionismo/luffy8.jpeg"},
  {id:50, src:"../assets/imagenes/figurascoleccionismo/luffy9.jpeg"}
];

arrayListModalCard9: listaImg   = [    
  {id:56, src:"../assets/imagenes/figurascoleccionismo/tortugaleonardo1.jpeg"},
  {id:57, src:"../assets/imagenes/figurascoleccionismo/tortugaleonardo2.jpeg"},
  {id:58, src:"../assets/imagenes/figurascoleccionismo/tortugaleonardo3.jpeg"},
  {id:59, src:"../assets/imagenes/figurascoleccionismo/tortugaleonardo4.jpeg"}
];

     //***Duplico las modalCard11 con la ModalCard8 xq no tengo imagen nueva para poner
      //***Cuando se agregue una img, crear aca la ArrayList que se va a mostrar
arrayListModalCard10: listaImg = [    
  {id:31, src:"../assets/imagenes/figurascoleccionismo/dragonball1.jpeg"},
  {id:32, src:"../assets/imagenes/figurascoleccionismo/dragonball2.jpeg"},
  {id:34, src:"../assets/imagenes/figurascoleccionismo/dragonball3.jpeg"},
  {id:35, src:"../assets/imagenes/figurascoleccionismo/dragonball4.jpeg"},
  {id:36, src:"../assets/imagenes/figurascoleccionismo/dragonball5.jpeg"},
  {id:36, src:"../assets/imagenes/figurascoleccionismo/dragonball6.jpeg"}
];

arrayListModalCard11: listaImg = this.arrayListModalCard7;

arrayListModalCard12: listaImg   = [    
  {id:31, src:"../assets/imagenes/figurascoleccionismo/flanders1.jpeg"},
  {id:32, src:"../assets/imagenes/figurascoleccionismo/flanders2.jpeg"},
  {id:34, src:"../assets/imagenes/figurascoleccionismo/flanders4.jpeg"},
  {id:35, src:"../assets/imagenes/figurascoleccionismo/flanders5.jpeg"},
  {id:36, src:"../assets/imagenes/figurascoleccionismo/flanders6.jpeg"}
];

  ///////ArrayList ModalCards 13 al 18 ---Picadores

arrayListModalCard13: listaImg   = [    
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
             //***Duplico las modalCard14 y 15, 16, 17 y 18 con las ModalCard13 xq no tengo imagen nueva para poner
             //***Cuando se agregue una img, crear aca las ArrayLists que se va a mostrar
  arrayListModalCard14: listaImg = this.arrayListModalCard13;
  arrayListModalCard15: listaImg = this.arrayListModalCard13;
  arrayListModalCard16: listaImg = this.arrayListModalCard13;
  arrayListModalCard17: listaImg = this.arrayListModalCard13;
  arrayListModalCard18: listaImg = this.arrayListModalCard13;

  ///////ArrayList ModalCards 19 al 24 ---Bustos
arrayListModalCard19: listaImg   = [    
    {id:1, src:"../assets/imagenes/bustos/batman1.jpeg"},
    {id:2, src:"../assets/imagenes/bustos/batman2.jpeg"},
    {id:3, src:"../assets/imagenes/bustos/batman3.jpeg"},
    {id:4, src:"../assets/imagenes/bustos/batman4.jpeg"}
  ];

  arrayListModalCard20: listaImg =  [    
    {id:60, src:"../assets/imagenes/picadores/picador1.jpeg"},
    {id:63, src:"../assets/imagenes/picadores/picador4.jpeg"},
    {id:64, src:"../assets/imagenes/picadores/picador5.jpeg"},
    {id:65, src:"../assets/imagenes/picadores/picador6.jpeg"},
    {id:66, src:"../assets/imagenes/picadores/picador7.jpeg"},
    {id:67, src:"../assets/imagenes/picadores/picador8.jpeg"},
    {id:68, src:"../assets/imagenes/picadores/picador9.jpeg"}
  ];
  
arrayListModalCard21: listaImg   = [    
    {id:5, src:"../assets/imagenes/bustos/frankenstein1.jpeg"},   
    {id:9, src:"../assets/imagenes/bustos/frankenstein5.jpeg"}
  ];

  arrayListModalCard22: listaImg = this.arrayListModalCard21;

arrayListModalCard23: listaImg   = [    
    {id:10, src:"../assets/imagenes/bustos/tortugarafael1.jpeg"},
    {id:11, src:"../assets/imagenes/bustos/tortugarafael2.jpeg"},
    {id:12, src:"../assets/imagenes/bustos/tortugarafael3.jpeg"},
    {id:13, src:"../assets/imagenes/bustos/tortugarafael4.jpeg"},
    {id:14, src:"../assets/imagenes/bustos/tortugarafael5.jpeg"},
    {id:15, src:"../assets/imagenes/bustos/tortugarafael6.jpeg"},
    {id:16, src:"../assets/imagenes/bustos/tortugarafael7.jpeg"}
  ];

arrayListModalCard24: listaImg   = [    
  {id:140, src:"../assets/imagenes/varios/t8001.jpeg"},
  {id:141, src:"../assets/imagenes/varios/t80010.jpeg"},
  {id:143, src:"../assets/imagenes/varios/t8002.jpeg"},
  {id:144, src:"../assets/imagenes/varios/t8003.jpeg"},
  {id:145, src:"../assets/imagenes/varios/t8004.jpeg"},
  {id:146, src:"../assets/imagenes/varios/t8005.jpeg"},
  {id:147, src:"../assets/imagenes/varios/t8006.jpeg"},
  {id:148, src:"../assets/imagenes/varios/t8007.jpeg"},
  {id:149, src:"../assets/imagenes/varios/t8008.jpeg"},
  {id:150, src:"../assets/imagenes/varios/t8009.jpeg"},
];


constructor(private modalService:BsModalService){

  
};

ngOnInit(){};


//////####### MODAL #######//////
openModal(templateModalCard123Etc: TemplateRef<any>){
  this.bsModalRef = this.modalService.show(templateModalCard123Etc); 
}

//////####### NAVBAR #######//////
toggleCollapse() {
  this.isExpanded = !this.isExpanded;
}


  }