import { Component, OnInit } from '@angular/core';
import { RegistrosService, Registro } from '../../services/registros.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:string="";
  registroActual:Registro={Id_registro:'',CURP:'',Nombre:'', primer_apellido:'', segundo_apellido:'', instituto:''}
  constructor(private RegistrosService: RegistrosService, private activateRouter: ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    this.id = this.activateRouter.snapshot.params['id'];
    this.RegistrosService.getunRegistro(this.id).subscribe(
      res=>{
        this.registroActual=res;
         console.log(this.registroActual)},
      err=> console.log(err)
    )
  }

  guardar(){
    this.RegistrosService.editunRegistro(this.id, this.registroActual).subscribe(
      res=>this.route.navigate(['/home']),
      err=> console.log(err)
    )
  }
}
