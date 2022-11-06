import { Component, OnInit } from '@angular/core';
import {RegistrosService} from "../../services/registros.service";
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  lista:any=[];
  searchText: any;
  name = 'ExcelSheet.xlsx';
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


  exportToExcel(): void {
    let element = document.getElementById('data-table');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  }

  eliminar(id:string)
  {
    this.RegistrosService.deleteunRegistro(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
    );
  }
}
