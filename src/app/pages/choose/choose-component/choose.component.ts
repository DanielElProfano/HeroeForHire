import { HeroesService } from './../../../services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss']
})
export class ChooseComponent implements OnInit {

  personajes: any = [];

  arrayHeroes : any = [];

  constructor(private heroesService : HeroesService)  {


   }

  ngOnInit(): void {

    this.getPowerStats();
  }

  getPowerStats(){
    for(let i= 1; i<=2; i++){
     

      this.heroesService.getPowerStats(i).subscribe((result) => {
        this.personajes = result;
        this.arrayHeroes.push(result);
          })
    }
    console.log(this.arrayHeroes);


  }

}
