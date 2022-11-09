import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  public cartItemList: any = [];
  public produtoList = new BehaviorSubject<any>([]);

  constructor() { }

  getProdutos() {
    return this.produtoList.asObservable();
  }

  setProduto(produto: any) {
    this.cartItemList.push(...produto);
    this.produtoList.next(produto);
  }

  addCart(produto: any) {
    this.cartItemList.push(produto);
    this.produtoList.next(this.cartItemList);
    this.getPrecoTotal();
    console.log(this.cartItemList);
  }

  getPrecoTotal() : number{
    let totalGeral = 0;
    this.cartItemList.map((a:any)=>{
      totalGeral += a.total;
    })
    return totalGeral;
  }
  removeCartItem(produto: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (produto.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.produtoList.next(this.cartItemList);
  }




}
