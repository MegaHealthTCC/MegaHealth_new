import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/components/services/api.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-category.component.html',
  styleUrls: ['./dialog-category.component.css']
})
export class DialogCategoryComponent implements OnInit{
  categoryForm !: FormGroup;
  actionBtn : string = "Salvar"
  constructor(private formBuilder : FormBuilder,
    private api : ApiService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<DialogCategoryComponent> ) { }

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      description : ['' ,Validators.required],
    });
    console.log(this.editData);
    if(this.editData){
      this.actionBtn = "Atualizar";
      this.categoryForm.controls['description'].setValue(this.editData.description);
      this.getCategorys
    }
  }

  AddCategory(){
    if(!this.editData){
      if(this.categoryForm.valid){
      this.api.postCategory(this.categoryForm.value)
      .subscribe({
        next:(res)=>{
          alert("Categoria adicionada com sucesso");
          this.categoryForm.reset();
          this.dialogRef.close('Salvo');
          this.getCategorys();
        },
        error:()=>{
          alert("Erro não foi possivel adicionar a categoria")
        }
      })
     }
    } else{
      this.updateCategoy()
    }
  }

  updateCategoy(){
    this.api.putCategory(this.categoryForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Categoria atualizada com sucesso");
        this.dialogRef.close('Atualizado'),
        this.getCategorys
      },
      error:()=>{
        alert("Erro não foi possivel atualizar a categoria")
      }
    })
  }


  getCategorys(){
    this.api.getCategory()
    .subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        alert("Erro")
      }
    })
  }
}
