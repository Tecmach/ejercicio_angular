import { Component, OnInit } from '@angular/core';
import { RegistrosService } from '../../services/registros.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-see',
  templateUrl: './see.component.html',
  styleUrls: ['./see.component.css']
})
export class SeeComponent implements OnInit {
  id:string="";
  lista:any=[];
  constructor(private RegistrosService: RegistrosService, private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.informationUn();
  }
  informationUn(){
    this.id = this.activateRouter.snapshot.params['id'];
    this.RegistrosService.getunRegistro(this.id).subscribe(
      res=>{this.lista=res, console.log(this.lista)},
      err=> console.log(err)
    )
  }
}
