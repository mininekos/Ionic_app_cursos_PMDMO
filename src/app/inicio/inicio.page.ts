import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  formCurso!:FormGroup;
  formNombre!:FormControl;
  formNota!:FormControl;

  constructor( private controlAlerta: AlertController) { }

  ngOnInit() {
    this.crearComponentes();
    this.crearFormulario();
    
  }

  crearComponentes(){
    this.formNombre=new FormControl('',[Validators.required,Validators.minLength(5)]);
    this.formNota=new FormControl(0,[Validators.required, Validators.min(0),Validators.max(10)]);
  }

  crearFormulario(){
    this.formCurso= new FormGroup({
      formNombre: this.formNombre,
      formNota: this.formNota
    })
  }
  
  async comprobarValidators(){
    var texto=""
    if(this.formCurso.invalid){
      if(this.formNombre.invalid)
        texto="Nombre no valido"
      else
        texto="Nota no valida"
      const alert = await this.controlAlerta.create({
        header: 'Error',
        message: texto,
        buttons: ['OK'],
      });
  
      await alert.present();
    }
  }
}
