import { MenuService } from './menu.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public categoria!: Categoria[]
  
  constructor(
    private menuService: MenuService
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

  categoriaSelect(categoria:Categoria){

  }
}
