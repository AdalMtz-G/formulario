import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  registrarForm: FormGroup;
  
  constructor(public formBuilder: FormBuilder) { 
    this.registrarForm = this.formBuilder.group({
      nombres: ['',[Validators.required]],
      telefono: ['', [Validators.required]],
     animales: [''],
     patio: [''],
     comentarios: [""]

      });
  }

  ngOnInit() {
  }
  get f() { return this.registrarForm.controls; }



  registrar() {
    console.log(this.registrarForm.value);
  }

}
