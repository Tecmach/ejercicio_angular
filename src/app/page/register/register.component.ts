import { Component, OnInit } from '@angular/core';
import { RegistrosService } from 'src/app/services/registros.service';
import { Registro } from '../../services/registros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registroNuevo: Registro={Id_registro:'',CURP:'',Nombre:'', primer_apellido:'', segundo_apellido:'', instituto:''}
  constructor(private RegistrosServices: RegistrosService, private route:Router) { }

  ngOnInit(): void {

  }
  agregarRegistro(){
    this.RegistrosServices.addRegistro(this.registroNuevo).subscribe(
      res=> {console.log(res), this.route.navigate(['/home'])},
      err=> console.log(err)
    )
  }
}
