import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  public sinupForm !: FormGroup;

  constructor(private formbuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.sinupForm = this.formbuilder.group({
      name:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required],
      cpf:['', Validators.required],
      
    }) 
  }

  singUp(){
      this.http.post<any>("http://localhost:5270/api/Pessoa", this.sinupForm.value)
      .subscribe(res=>{
        alert("Cadastrado com sucesso");
        this.sinupForm.reset();
        this.router.navigate(['login']);
      }, err=>{
        alert("Tente novamente")
      })
  }
}





