import { Component, OnInit } from '@angular/core';
import { InterfaceHeroDetail, InterfacePowerStats } from 'src/app/models/Interface-hero-general';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-stadistics',
  templateUrl: './stadistics.component.html',
  styleUrls: ['./stadistics.component.scss']
})
export class StadisticsComponent implements OnInit {

   arrayHeroes : InterfaceHeroDetail | any = [];
  personaje : InterfaceHeroDetail | any = {};
  powerStats : InterfacePowerStats | any = {}; //datos de la gráfica.

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {

    this.getListPowerStats();


  }

  getListPowerStats(){
    for(let i= 1; i<=2; i++){
     

      this.heroesService.getHeroDetail(i).subscribe((result) => {
        this.personaje = result;
        this.arrayHeroes.push(result);
      });
    }
  }

   setId(id:string){
    
    this.heroesService.getPowerStats(parseInt(id)).subscribe((result) =>{
      this.powerStats = result;
      console.log(this.powerStats);
    });
  }
}
  
  
