import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Curso } from '../modelo/curso';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  cursos: Curso[]
  cursos$: BehaviorSubject<Curso[]>
  constructor() {
    this.cursos=[
      new Curso("Mates",8)
    ]

    this.cursos$= new BehaviorSubject<Curso[]>(this.cursos);
  }

  getCursos(): Curso[]{
    return [...this.cursos]
  }

  getCursos$(): Observable<Curso[]>{
    return this.cursos$.asObservable();
  }

  agregarCurso(c:Curso){
    this.cursos.unshift(c)
    this.cursos$.next([...this.cursos])

  }

  borrarCurso(curso: Curso){
    this.cursos=this.cursos.filter(c=>c.getId() != curso.getId());
    this.cursos$.next([...this.cursos]);
  }

  obtenerCursoDetalle(id: string):Curso{
    return this.cursos.filter(c=>c.getId() == id)[0]
  }

}
