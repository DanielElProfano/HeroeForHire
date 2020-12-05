import { InterfaceFilteHeroes, InterfaceHeroGeneral} from './../../../../models/Interface-hero-general';
import { HeroesService } from 'src/app/services/heroes.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IfilterForm, Alignment, powerStats } from './model/IfilterForm';



@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() emmitArray  = new EventEmitter<InterfaceHeroGeneral[]>();
  
  public form: FormGroup|any = null;
  
  public filter: IfilterForm|any ={}
  public submitted = false;
  public powerStats: powerStats[]|any = [];
  public arrayFilter: InterfaceHeroGeneral[]=[];
  public arrayResult: InterfaceHeroGeneral[]=[];
  public filtrado: InterfaceHeroGeneral | any = {}
  arrayAlignment: string[][];
  //variables para el select

  

  constructor(private formBuilder: FormBuilder, private heroesService: HeroesService){ 

  this.arrayAlignment=[
    [ 'bad'],['good'],['both']
  ];
  this.powerStats=[
    ['intelligence'],['strength'],['speed'],
    ['durability'],['power'],['combat']
  ];

    this.form = this.formBuilder.group({

      alignment: ['',[]],
      powerStats: ['',[]],
      sex : ['',[]]
    })

   
  }

  ngOnInit(): void {}

  getArray(array: InterfaceHeroGeneral[]):void{
    debugger
    
    this.emmitArray.emit(array);
  }

  onSubmit():void{

    if(this.form.valid){
      const filter: IfilterForm = {
      sex: this.form.get('sex').value,
      powerStats: this.form.get('powerStats').value,
      alignment: this.form.get('alignment').value



    }
      
      this.filterForm(filter);
    }
    
  }
 
  private filterForm(filter: IfilterForm):void{

    const sex: string = filter.sex; 

    const alignment: any = filter.alignment[0];

    const powerStats: string = filter.powerStats[0];
    
    for(let i = 1; i<=731; i++){
   this.heroesService.filterHeroes(i, sex, alignment, powerStats).subscribe(
     (result) =>{

      this.sortResult(result, sex, alignment, powerStats);
      // console.log(this.arrayFilter)
      

      
      
   });
  }
  this.arrayResult =  this.arrayFilter
  this.getArray( this.arrayResult);
  console.log(this.arrayResult);
  

 

  }

  private sortResult(result: InterfaceFilteHeroes, sex: string, alignment: string, powerStats: string): any{
    
    if(alignment!=undefined && (sex != "" || sex != undefined)){ //si align tiene texto

     if((sex === "male" && result.gender.toLowerCase() === 'male') && ( alignment === 'good' && result.alignment.toLowerCase()==='good')){
    
      this.pushArray(result);
      }
      else if(sex === "female" && result.gender.toLowerCase() === 'female' && ( alignment === 'good' && result.alignment.toLowerCase()==='good')){
        this.pushArray(result);
      }
    if(sex === "male" && result.gender.toLowerCase() === 'male' && ( alignment === 'bad' && result.alignment.toLowerCase()==='bad')){
      this.pushArray(result);

    } else if(sex === "female" && result.gender.toLowerCase() === 'female' && ( alignment === 'bad' && result.alignment.toLowerCase()==='bad')){
      this.pushArray(result);
    }
    

    }
    else{
      if(sex != "" || sex != undefined){

      if(sex === "male" && result.gender.toLowerCase() === 'male'){
        this.pushArray(result);
        // this.arrayFilter.push(result);
        // const {speed, intelligence ,strength,durability,power, combat, ...filtrado } = result
       }
       else if(sex === "female" && result.gender.toLowerCase() === 'female'){
        this.pushArray(result);
       }

       }
       if(alignment!=undefined){
        if(alignment === "good" && result.gender.toLowerCase() === 'good'){
          this.pushArray(result);


       }
       if(alignment === "bad" && result.gender.toLowerCase() === 'good'){
        this.pushArray(result);


      }

    
      }




  }

  
  
  }
  public pushArray(result: InterfaceFilteHeroes){
    // debugger
  
    const {speed, intelligence ,strength,durability,power, combat, ...filtrado } = result
    this.arrayFilter.push(filtrado);
  }

}