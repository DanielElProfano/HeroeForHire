import { InterfaceHeroGeneral } from './../../../models/Interface-hero-general';
import { Component, OnInit } from '@angular/core';
import { InterfaceHeroDetail, InterfacePowerStats } from 'src/app/models/Interface-hero-general';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-stadistics',
  templateUrl: './stadistics.component.html',
  styleUrls: ['./stadistics.component.scss']
})
export class StadisticsComponent implements OnInit {

  showDetails = false;
  arrayHeroes : InterfaceHeroGeneral | any = [];
  personaje : InterfaceHeroDetail | any = {}; //detail del personaje.
  powerStats : InterfacePowerStats | any = {}; //datos de la gráfica.

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {

    this.getListPowerStats();
    


  }

  getListPowerStats(){
    for(let i= 1; i<=10; i++){
     

      this.heroesService.getList(i).subscribe((result) => {
       
        this.arrayHeroes.push(result);
      });
    }
  }

   setId(id:number){

    
    this.heroesService.getPowerStats(id).subscribe((result) =>{
      this.powerStats = result;
      console.log(this.powerStats);
      
      this.getDetail(id);
    });
  }


  getDetail(id:number){
    this.heroesService.getHeroDetail(id).subscribe((result) =>{
      this.personaje = result;
      this.showDetails = true
      
    })
  }
}
  
  
