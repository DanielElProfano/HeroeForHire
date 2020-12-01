import { Component, OnInit } from '@angular/core';
import { InterfaceHeroPowerStats } from 'src/app/models/Interface-hero-general';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-stadistics',
  templateUrl: './stadistics.component.html',
  styleUrls: ['./stadistics.component.scss']
})
export class StadisticsComponent implements OnInit {

   arrayHeroes : InterfaceHeroPowerStats | any = [];
  personaje : InterfaceHeroPowerStats | any = {};

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {

    this.getListPowerStats();


  }

  getListPowerStats(){
    for(let i= 1; i<=2; i++){
     

      this.heroesService.getPowerStats(i).subscribe((result) => {
        this.personaje = result;
        this.arrayHeroes.push(result);
 
        
          });
    }

  }
}
