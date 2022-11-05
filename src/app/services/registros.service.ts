import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {
  url ='/api';
  constructor(private  http: HttpClient) { }

  //get registros
  getRegistros(){
    return this.http.get(this.url);
  }


  //get un registro
  getunRegistro(id:string){
    return this.http.get(this.url+'/'+id)
  }
  //agregar un registro
  addRegistro(registro:Registro){
    return this.http.post(this.url,registro)
  }

  //delete
  deleteunRegistro(id:string){
    return this.http.delete(this.url+'/'+id)
  }
  //modificar
  editunRegistro(id:string, registro: Registro){
    return this.http.put(this.url+'/'+id,registro)
  }

}
export interface Registro{
  id_registro?:string;
  curp?:string;
  nombre?:string;
  apellido?:string;
  apellido1?:string;
  instituto?:string;

}
