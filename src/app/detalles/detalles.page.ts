import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../modelo/curso';
import { ServicioService } from '../servicios/servicio.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  curso!:Curso
  id!:string
  constructor(private servicio: ServicioService,
    private route: ActivatedRoute,
    private routing: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id=params['id']
      this.curso=this.servicio.obtenerCursoDetalle(this.id)
    })
    
  }

  eliminarCurso(){
    this.servicio.borrarCurso(this.curso)
    this.routing.navigate(['inicio'])
  }
}
