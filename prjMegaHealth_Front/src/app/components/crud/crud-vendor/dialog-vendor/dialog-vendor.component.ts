import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/components/services/api.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-dialog-vendor',
  templateUrl: './dialog-vendor.component.html',
  styleUrls: ['./dialog-vendor.component.css']
})
export class DialogVendorComponent implements OnInit{
  VendorForm !: FormGroup;
  actionBtn : string = "Salvar"
  constructor(private formBuilder : FormBuilder,
    private api : ApiService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<DialogVendorComponent> ) { }

  ngOnInit(): void {
    this.VendorForm = this.formBuilder.group({
      forn_Name : ['' ,Validators.required],
      forn_CNPJ : ['' ,Validators.required],
      email : [''],
      tel : [''],

    });
    console.log(this.editData);
    if(this.editData){
      this.actionBtn = "Atualizar";
      this.VendorForm.controls['forn_Name'].setValue(this.editData.forn_Name);
      this.VendorForm.controls['forn_CNPJ'].setValue(this.editData.forn_CNPJ);
      this.VendorForm.controls['email'].setValue(this.editData.email);
      this.VendorForm.controls['tel'].setValue(this.editData.tel);
      this.getVendor
    }
  }

  AddVendor(){
    if(!this.editData){
      if(this.VendorForm.valid){
      this.api.postVendor(this.VendorForm.value)
      .subscribe({
        next:(res)=>{
          alert("Fornecedor adicionado com sucesso");
          this.VendorForm.reset();
          this.dialogRef.close('Salvo');
          this.getVendor();
        },
        error:()=>{
          alert("Erro não foi possivel adicionar o fornecedor")
        }
      })
     }
    } else{
      this.updateVendor()
    }
  }

  updateVendor(){
    this.api.putVendor(this.VendorForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Fornecedor atualizado com sucesso");
        this.dialogRef.close('Atualizado'),
        this.getVendor
      },
      error:()=>{
        alert("Erro não foi possivel atualizar o fornecedor")
      }
    })
  }


  getVendor(){
    this.api.getVendor()
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
