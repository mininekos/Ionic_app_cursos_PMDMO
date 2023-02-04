import { v4 as uuidv4 } from 'uuid';

export class Curso {

    private nombre: string;
    private nota: Number;
    private id: string

    constructor(nombre:string,nota:Number){
        this.nombre=nombre
        this.nota=nota
        this.id = uuidv4();
    }

    getNombre(): string{
        return this.nombre
    }

    getNota(): Number{
        return this.nota
    }

    getId(): string{
        return this.id
    }

    setNombre(nombre: string){
        this.nombre=nombre
    }

    setId(id: string){
        this.id=id
    }

    setNota(nota:Number){
        this.nota=nota
    }

}
