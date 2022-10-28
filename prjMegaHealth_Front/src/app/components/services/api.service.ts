import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postCategory (data : any) {
    return this.http.post<any>("http://localhost:5270/api/Categoria/", data);
  }

  getCategory(){
    return this.http.get<any>("http://localhost:5270/api/Categoria/");
  }

  putCategory(data:any, id : string){
    console.log(id, data);
    const info ={...data, id }
    return this.http.put<any>("http://localhost:5270/api/Categoria/"+ id ,info);

  }

  deleteCategory(id: string){
    return this.http.delete("http://localhost:5270/api/Categoria/" + id)
  }



  //Fornecedor

  postVendor (data : any) {
    return this.http.post<any>("http://localhost:5270/api/Vendor/", data);
  }

  getVendor(){
    return this.http.get<any>("http://localhost:5270/api/Vendor/");
  }

  putVendor(data:any, id : string){
    console.log(id, data);
    const info ={...data, id }
    return this.http.put<any>("http://localhost:5270/api/Vendor/"+ id ,info);

  }

  deleteVendor(id: string){
    return this.http.delete("http://localhost:5270/api/Vendor/" + id)
  }



  //pessoa
  getPeople(){
    return this.http.get<any>("http://localhost:5270/api/Pessoa/");
  }




  //Produto


  postProduct (data : any) {
    return this.http.post<any>("http://localhost:5270/api/Produto/", data);
  }

  getProduct(){
    return this.http.get<any>("http://localhost:5270/api/Produto/");
  }

  putProduct(data:any, id : string){
    console.log(id, data);
    const info ={...data, id }
    return this.http.put<any>("http://localhost:5270/api/Produto/"+ id ,info);

  }

  deleteProduct(id: string){
    return this.http.delete("http://localhost:5270/api/Produto/" + id)
  }

  //Separação

  // postClient(data : any) {
  //   return this.http.post<any>("https://localhost:7119/api/Client", data);
  // }

  // getClient(){
  //   return this.http.get<any>("https://localhost:7119/api/Client");
  // }

  // putClient(data:any,id : number){
  //   console.log(id, data);
  //   const info ={...data, id }
  //   return this.http.put<any>("https://localhost:7119/api/Client/"+ id ,info);
  // }

  // deleteClient(id:number){
  //   return this.http.delete<any>("https://localhost:7119/api/Client/"+id);
  // }
}





