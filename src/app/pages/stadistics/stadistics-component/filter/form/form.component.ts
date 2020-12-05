// import { IfilterForm } from './../model/IfilterForm';
// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-form',
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.scss']
// })
// export class FormComponent implements OnInit {

//   public arrayAlignment : Alignment[] | any = []
//   public filterForm: FormGroup | any;
//   public alignmentGood : Alignment |any = {}
//   public alignmentBad : Alignment |any = {}
//   public submitted = false;

//   constructor(private formBuilder: FormBuilder) { 
    // this.arrayAlignment = 
    //   [
    //   this.alignmentGood.value = '0',
    //   this.alignmentGood.alignment = 'Good'
    //   ],
    //   [
    //   this.alignmentBad.value = '1',
    //   this.alignmentBad.desc = 'Bad'
    //   ];
 

    // this.filterForm = this.formBuilder.group({
           
    //   alignment: ['', [Validators.required, Validators.maxLength(20)]],
    //   sexo: ['', [Validators.required, Validators.maxLength(20)]],
    //   developer: [false, []],
    //   intelligence:['',[Validators.maxLength(12)]],
    //   strength:['', []],
    //   speed: ['',[Validators.required]],
    //   durability: ['',[Validators.required]],
    //   power: ['',[Validators.required]],
    //   combat: ['',[Validators.required]],
    //   });

  

  // ngOnInit(): void {}

  // public onSubmit(): void {
  //   // El usuario ha pulsado en submit->cambia a true submitted
  //   this.submitted = true;
  //   // Si el formulario es valido
  //   if (this.filterForm.valid) {
  //     // Creamos un Usuario y lo emitimos
  //     const filter: IfilterForm = {
  //       alignment: this.filterForm.get('alignment').value,
  //       sexo: this.filterForm.get('sexo').value,
  //       intelligence: this.filterForm.get('strength').value,
  //       strength: this.filterForm.get('strength').value,
  //       speed: this.filterForm.get('speed').value,
  //       durability: this.filterForm.get('durability').value,
  //       power: this.filterForm.get('power').value,
  //       combat: this.filterForm.get('combat').value,

  //     };
  //     console.log(filter);
  //     // Reseteamos todos los campos y el indicador de envío o submitted
  //     this.filterForm.reset();
  //     this.submitted = false;
  //   }
  // }


