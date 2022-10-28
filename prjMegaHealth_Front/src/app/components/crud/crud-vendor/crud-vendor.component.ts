import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from 'src/app/components/services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogVendorComponent } from './dialog-vendor/dialog-vendor.component';


@Component({
  selector: 'app-crud-vendor',
  templateUrl: './crud-vendor.component.html',
  styleUrls: ['./crud-vendor.component.css']
})
export class CrudVendorComponent implements OnInit {
  displayedColumns: string[] = ['forn_Name', 'forn_CNPJ', 'email', 'tel', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private dialog : MatDialog, private api : ApiService, private http : HttpClient) {
  }
  ngOnInit(): void {
  this.getAllVendor();
  }


  openDialog() {
    this.dialog.open(DialogVendorComponent, {
      width: '30%'
    }).afterClosed().subscribe(val=>{
      if(val ==='save'){
      }
      this.getAllVendor();
    })
  }

  getAllVendor(){
    this.api.getVendor()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        alert("Erro")
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editVendor(row : any){
    this.dialog.open(DialogVendorComponent,{
      width: '30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val ==='update'){

      }
      this.getAllVendor();

    })
  }

  deleteVendor(id: string ){
    this.api.deleteVendor(id)
    .subscribe({
      next:(res)=>{
        alert("Fornecedor deletado com sucesso");
        this.getAllVendor();
      },
      error:()=>{
        alert("Não foi possivel deletar o fornecedor")
      }
    })
  }
}




