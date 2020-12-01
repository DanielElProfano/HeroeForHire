import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InterfaceHeroPowerStats } from 'src/app/models/Interface-hero-general';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.scss']
})
export class StickerComponent implements OnInit {

  @Input() arrayHeroe :  InterfaceHeroPowerStats[] | any = [];
  @Output() emmitId  = new EventEmitter<string>();
    

  constructor() { 
    
    console.log("esto es: "+this.arrayHeroe);

  }

  ngOnInit(): void {
  }

  getId(id: any){
    let heroId = id.target.id
    debugger
    this.emmitId.emit(heroId);
    
  }

}
