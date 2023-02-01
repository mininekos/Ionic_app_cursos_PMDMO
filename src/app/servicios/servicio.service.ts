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

  agregarCurso(nombre:string,nota: Number){
    this.cursos.unshift(new Curso(nombre,nota))
    this.cursos$.next([...this.cursos])

  }

}
