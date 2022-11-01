import { HttpClientModule } from '@angular/common/http';
import { MenuService } from './menu.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public categoria!: Categoria[]
  public searchTerm : string = ''
  constructor(
    private menuService: MenuService,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getCategoria();
  }

  getCategoria(){
    this.menuService.getAll().subscribe(
      (res:Categoria[]) => {
        this.categoria = res;
      }
    )
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm)
    this.apiService.search.next(this.searchTerm)
  }

  categoriaSelect(categoria:Categoria){

  }
}
