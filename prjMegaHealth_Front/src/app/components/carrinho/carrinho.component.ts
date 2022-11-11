import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CarrinhoService } from 'src/app/components/services/carrinho.service';
import { Produto } from 'src/app/models/Produto';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  public produtos: Produto[] = [];
  public totalGeral !: number;

  public quantitys: number = 1;


  constructor(private carrinhoService: CarrinhoService) { }




  ngOnInit(): void {
    this.carrinhoService.getProdutos()
      .subscribe(res => {
        this.produtos = res;
        this.totalGeral = this.carrinhoService.getPrecoTotal();
      })
  }


  removeItem(item: any) {
    this.carrinhoService.removeCartItem(item);
  }



  //   public adicionar(produto: Produto){
  //     var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");
  //     if (!produtoLocalStorage){
  //       //não existir informação no local storage
  //       this.produtos.push(produto);   
  //     }
  //     else{
  //       this.produtos = JSON.parse(produtoLocalStorage)
  //       this.produtos.push(produto);
  //     }

  //     localStorage.setItem("produtoLocalStorage", JSON.stringify(this.produtos));
  //   }

  //   public obterProdutos(){
  //     var produtoLocalStorage = localStorage.getItem("produtoLocalStorage")
  //     if(produtoLocalStorage)
  //       return JSON.parse(produtoLocalStorage)

  //   }

  //   public removerProduto(produto: Produto){

  //   }






}
