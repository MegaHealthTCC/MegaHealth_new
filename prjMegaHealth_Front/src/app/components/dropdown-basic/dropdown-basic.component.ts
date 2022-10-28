import { DropdownBasicService } from './dropdown-basic.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';

@Component({
  selector: 'app-dropdown-basic',
  templateUrl: './dropdown-basic.component.html',
  styleUrls: ['./dropdown-basic.component.css']
})
export class DropdownBasicComponent implements OnInit {


  public categoria!: Categoria[];

  constructor(
    private dropService: DropdownBasicService
  ) { }

  ngOnInit(): void {
  }

  getCategoria(){
    this.dropService.getAll().subscribe(
      (res:Categoria[]) => {
        this.categoria = res;
      }
    )
  }
}
