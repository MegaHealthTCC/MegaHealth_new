import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarrinhoComponent } from '../carrinho/carrinho.component';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: any;
  filterCategory: any;
  searchKey: string = "";
  public searchTerm: string = '';
  public searchT = new BehaviorSubject<string>("");
  public carrinhoCompras!: CarrinhoComponent

  constructor(private http: HttpClient, private carrinhoService: CarrinhoService, private router: Router) { }

  ngOnInit(): void {
    this.http.get("http://localhost:5270/api/Produto")
      .subscribe(produtos => {
        this.produtos = produtos;
        this.filterCategory = produtos;
        console.log(produtos);


        this.produtos.forEach((a: any) => {
          if (a.idCategory === "Ofertas") {
            a.idCategory === "Ofertas"
          }
          Object.assign(a,{quantitys: 1,total:a.price})
        });
       
        console.log(produtos);
      })

    this.searchT.subscribe((val: any) => {
      this.searchKey = val;
    })

    this.carrinhoCompras = new CarrinhoComponent();
    
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.searchT.next(this.searchTerm);
  }

  addCart(produto: any) {
    this.carrinhoService.addCart(produto);
    
  }
  filter(category: string) {
    this.filterCategory = this.produtos
      .filter((a: any) => {
        if (a.idCategory === category || category === '') {
          return a;
        }
      })
  }


  public comprar(){
    this.carrinhoCompras.adicionar(this.produtos);
    this.router.navigate(["/cart"])
  }
}
