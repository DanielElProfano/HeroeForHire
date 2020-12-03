import { InterfaceHeroGeneral } from './../../../../models/Interface-hero-general';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InterfacePowerStats } from 'src/app/models/Interface-hero-general';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.scss']
})
export class StickerComponent implements OnInit {

  @Input() arrayHeroe :  InterfaceHeroGeneral[] | any = [];
  @Output() emmitId  = new EventEmitter<number>();
    

  constructor() { 
    
    console.log("esto es: "+this.arrayHeroe);

  }

  ngOnInit(): void {
  }

  getId(event: any){
    let heroId = parseInt(event.target.id,10);
    this.emmitId.emit(heroId);
    
  }

}