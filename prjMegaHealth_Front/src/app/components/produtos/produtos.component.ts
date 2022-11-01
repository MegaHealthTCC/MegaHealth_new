import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Produto } from 'src/app/models/Produto';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produto: any;
  searchKey: string = "";
  filterCategory: any;
  baseUrl = 'http://localhost:5270/api';
  modalRef?: BsModalRef;
  desc: any;
  retorno: any;




  constructor(
    private BsModalService: BsModalService,
    private http: HttpClient,
    private apiService: ApiService
  ) { }








  ngOnInit() {
    this.getAllProduct();

    this.apiService.search.subscribe(
      (val:any) => {
        this.searchKey = val;

      }
    )
    // this.getById();
  }

  getAllProduct() {
    this.http.get(`${this.baseUrl}/Produto`).subscribe((response) => {
      this.produto = response;
      this.filterCategory = response;
      console.log(this.produto);
      return this.produto;
    });
  }

  getById() {
    var id = 'ca1d72fe-d01a-49b5-a787-6cd16f29dc45';
    this.http.get(`${this.baseUrl}/Produto/${id}`).subscribe(
      (resultado) => {
        console.log(resultado);
      },
      (erro) => {
        if (erro.status == 404) {
          console.log('Produto não localizado.');
        }
      }
    );
  }

  postCategories() {
    var description = { description: this.desc };

    this.http.post(`${this.baseUrl}/Produto`, description).subscribe(
      (resultado) => {
        console.log(resultado);
        this.getAllProduct();
        return resultado;
      },
      (erro) => {
        if (erro.status == 404) {
          console.log(erro);
        }
      }
    );
  }



  deleteCategories(produto: Produto, confirm: any) {


    this.http.delete(`${this.baseUrl}/Produto/${produto.id}`).subscribe(
      () => {
        confirm.hide()
        this.getAllProduct();
      },
      (erro) => {
        if (erro.status == 404) {
          console.log(produto.id);
        }
      }
    );
  }

  // filter(categoryId: string){
  //   this.filterCategory = this.produto.filter((a:any) => {
  //     if(a.category = categoryId || categoryId==''){
  //       return a;
  //     }
  //   })
  // }
}
