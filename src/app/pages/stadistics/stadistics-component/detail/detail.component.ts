import { InterfaceHeroDetail } from './../../../../models/Interface-hero-general';
import { Component, Input, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ]),
    ]),
  ],
})

export class DetailComponent implements OnInit {

  @Input() heroDetail : InterfaceHeroDetail | any = {};

  constructor() { }

  ngOnInit(): void {

    
    
  }

}
