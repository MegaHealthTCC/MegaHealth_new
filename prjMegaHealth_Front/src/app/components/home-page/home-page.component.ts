import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  produto: any;
  filterCategory: any;
  constructor() { }

  ngOnInit(): void {
  }


  
  filter(categoryId: string) {
    this.filterCategory = this.produto.filter((a: any) => {
      if (a.category = categoryId || categoryId == '') {
        return a;
      }
    })
  }

}
