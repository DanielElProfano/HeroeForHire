import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InterfacePowerStats } from 'src/app/models/Interface-hero-general';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.scss']
})
export class StickerComponent implements OnInit {

  @Input() arrayHeroe :  InterfacePowerStats[] | any = [];
  @Output() emmitId  = new EventEmitter<string>();
    

  constructor() { 
    
    console.log("esto es: "+this.arrayHeroe);

  }

  ngOnInit(): void {
  }

  getId(event: any){
    let heroId = event.target.id;
    
    this.emmitId.emit(heroId);
    
  }

}
