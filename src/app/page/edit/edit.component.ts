import { Component, OnInit } from '@angular/core';
import {Registro, RegistrosService} from "../../services/registros.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:string="";
  registroActual: Registro={id_registro:'',curp:'', nombre:'', apellido:'', apellido1:'', instituto:''};
  constructor(
    private  RegistrosService:RegistrosService,
    private activaterRouter: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id= this.activaterRouter.snapshot.params['id'];
    this.RegistrosService.getunRegistro(this.id).subscribe(
      res=> console.log(res),
      error => console.log(error)
    )
  }
}
