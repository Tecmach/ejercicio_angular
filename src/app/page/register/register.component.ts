import { Component, OnInit } from '@angular/core';
import {Registro,RegistrosService} from "../../services/registros.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registroNuevo: Registro={id_registro:'',curp:'', nombre:'', apellido:'', apellido1:'', instituto:''};
  constructor(private RegistrosService: RegistrosService, private router: Router) { }

  ngOnInit(): void {
  }
  agregarRegistro(){
    this.RegistrosService.addRegistro(this.registroNuevo).subscribe(
      res=> {console.log(res), this.router.navigate(['/inicio'])},
      err=> console.log(err)
    );
  }
}
