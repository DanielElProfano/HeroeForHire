import { InterfaceHeroGeneral } from './../models/Interface-hero-general';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';




@Injectable()


export class HeroesService {

  // private Url :string = 'https://pokeapi.co/api/v2/pokedex/1';
  private Url :string = 'https://www.superheroapi.com/api.php/10217431065143700/1'
  public heroes : InterfaceHeroGeneral | any = {}

  constructor(private http: HttpClient) {   }

  getList(i: number){
     const Url = `https://www.superheroapi.com/api.php/10217431065143700/${i}`;
    return this.http.get(Url).pipe(
      
        map((response: any) => {
   
        if(!response){
          throw new Error('Value expected!');
        } else {
        const formatResult : InterfaceHeroGeneral = {
            name : response.name,
            gender : response.appearance.gender,
            race : response.appearance.race,
            weight : response.appearance.weight,
            image : response.image.url,
            id : response.id
            }
        return formatResult;
        }
      }),
        catchError((err)=>{
        throw new Error(err.message);
      })
    )
  }
  getHeroes(i:number, alignment:string){
    const Url = `https://www.superheroapi.com/api.php/10217431065143700/${i}`;
    return this.http.get(Url).pipe(
      
        map((response: any) => {
   
        if(!response){
          throw new Error('Value expected!');
        } else {

          if(response.biography.alignment === alignment){

       
         const formatResult : InterfaceHeroGeneral = {
            name : response.name,
            gender : response.appearance.gender,
            race : response.appearance.race,
            weight : response.appearance.weight,
            image : response.image.url,
            id : response.id,
         
            }
        return formatResult;
          } else {

            return null;
          }
        }
      }),
        catchError((err)=>{
        throw new Error(err.message);
      })
    )
  }


}