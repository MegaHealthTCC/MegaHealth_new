import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/components/services/api.service';
import { RouterLink } from '@angular/router';
import { Categoria } from 'src/app/models/Categoria';
import { Produto } from 'src/app/models/Produto';
@Component({
  selector: 'app-dialog-product',
  templateUrl: './dialog-product.component.html',
  styleUrls: ['./dialog-product.component.css']


})
export class DialogProductComponent implements OnInit {
  public categories!: Categoria[];
  productForm !: FormGroup;
  actionBtn: string = "Salvar"

  public idSelect! : string;
  constructor(private formBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DialogProductComponent>) {

  }


  ngOnInit(): void {
    this.getAllCategorys();
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: [''],
      quantity: ['', Validators.required],
      brand: ['', Validators.required],
      IdCategory: ['', Validators.required],
      
    });
    console.log(this.editData);
    if (this.editData) {
      this.actionBtn = "Atualizar";
      this.productForm.controls['name'].setValue(this.editData.name);
      this.productForm.controls['price'].setValue(this.editData.price);
      this.productForm.controls['description'].setValue(this.editData.description);
      this.productForm.controls['quantity'].setValue(this.editData.quantity);
      this.productForm.controls['brand'].setValue(this.editData.brand);
      this.productForm.controls['idCategory'].setValue(this.editData.idCategory);
      this.getProduct
    }
  }

  AddProduct() {
    if (!this.editData) {
      if (this.productForm.valid) {
        this.api.postProduct(this.productForm.value)
          .subscribe({
            next: (res) => {
              alert("Produto adicionado com sucesso");
              this.productForm.reset();
              this.dialogRef.close('Salvo');
              this.getProduct();
            },
            error: () => {
              alert("Erro não foi possivel adicionar o produto")
            }
          })
      }
    } else {
      this.updateProduct()
    }
  }

  updateProduct() {
    this.api.putProduct(this.productForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert("Produto atualizado com sucesso");
          this.dialogRef.close('Atualizado'),
            this.getProduct
        },
        error: () => {
          alert("Erro não foi possivel atualizar o produto")
        }
      })
  }


  getProduct() {
    this.api.getProduct()
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          alert("Erro")
        }
      })
  }

  getAllCategorys() {
    this.api.getCategory()
      .subscribe(
        categories => {
          this.categories = categories
          console.log(this.categories)
        },
        (err) => {
          alert("Erro")
        },

      )
  }


  imprimir(produto:Produto){
    console.log(produto)
  }
}
