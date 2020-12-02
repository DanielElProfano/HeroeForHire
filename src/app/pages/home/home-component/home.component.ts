import { HeroesService } from './../../../services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  personajes : any = [];

  arrayHeroes : any = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {

    //  this.getListado();
    // this.getHeroes()
    this.getPowerStats();

    
 
  }
  getHeroes(){
    for(let i = 1; i <=10; i++){

      this.heroesService.getHeroes(i,'bad').subscribe((result) => {
        
        this.personajes = result;
        result != null ? this.arrayHeroes.push(result): result = null; //basicamente que no haga nada si no devuelve nada
        console.log(result);
      
      
      })
    }

  }
  getPowerStats(){
    for(let i= 1; i<=2; i++){
     debugger

      this.heroesService.getPowerStats(i).subscribe((result) => {
        this.personajes = result;
        this.arrayHeroes.push(result);
        console.log(result)
        
          })
    }
    
    console.log(this.arrayHeroes);


  }


  getListado(){
    for(let i= 1; i<=1; i++){

      this.heroesService.getList(i).subscribe((result) => {
        this.personajes = result;
        this.arrayHeroes.push(result);
          })
    }


  }

}
