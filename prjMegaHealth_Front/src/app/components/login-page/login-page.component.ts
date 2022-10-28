import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit { 
  
  public loginForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],

    })
  }

  

  login() {
    this.http.get<any>("http://localhost:5270/api/Pessoa")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
        });


        if (user) {
          alert("Login realizado com sucesso!");
          this.loginForm.reset();
          this.router.navigate(['home'])
        } else {
          alert("Dados inválidos")
        }

      }, err => {
        alert("Algo deu errado...")
      })
      
  }



}
