import { Component, OnInit } from '@angular/core';
import {RegistrosService} from "../../services/registros.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  lista:any=[];
  constructor(private RegistrosService: RegistrosService) { }

  ngOnInit(): void {
    this.listarRegistros()
  }
  listarRegistros(){
    this.RegistrosService.getRegistros().subscribe(
      res=> this.lista=res,
      err=> console.log(err)
    )
  }
  eliminar(id:string)
  {
    this.RegistrosService.deleteunRegistro(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
    );
  }
}
