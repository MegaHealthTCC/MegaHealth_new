import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from 'src/app/components/services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-crud-people',
  templateUrl: './crud-people.component.html',
  styleUrls: ['./crud-people.component.css']
})
export class CrudPeopleComponent implements OnInit {
  displayedColumns: string[] = ['name', 'cpf', 'email', 'password'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private dialog : MatDialog, private api : ApiService, private http : HttpClient) {
  }
  ngOnInit(): void {
  this.getAllPeople();
  }


  

  getAllPeople(){
    this.api.getPeople()
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

  

  
}




