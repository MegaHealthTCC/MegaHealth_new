import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CarrinhoService } from 'src/app/components/services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  public produtos : any =[];
  public totalGeral !: number;
 

  constructor(private carrinhoService : CarrinhoService) { }

  ngOnInit(): void {
   this.carrinhoService.getProdutos()
   .subscribe(res=>{
    this.produtos = res;
    this.totalGeral = this.carrinhoService.getPrecoTotal();
   })
  }

  removeItem(item:any){
   this.carrinhoService.removeCartItem(item);
  }


  
  

}
