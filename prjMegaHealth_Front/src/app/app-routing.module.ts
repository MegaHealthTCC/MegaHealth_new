

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';


import { MenuComponent } from './components/menu/menu.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { CrudCategoryComponent } from './components/crud/crud-category/crud-category.component';
import { BuyPageComponent } from './components/buy-page/buy-page.component';
import { CrudVendorComponent } from './components/crud/crud-vendor/crud-vendor.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AdmPageComponent } from './components/adm-page/adm-page.component';
import { CrudPeopleComponent } from './components/crud/crud-people/crud-people.component';
import { CrudProductComponent } from './components/crud/crud-product/crud-product.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';







const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'crud', component: CrudCategoryComponent},
  { path: 'buy', component: BuyPageComponent},
  { path: 'vendor', component: CrudVendorComponent},
  { path: 'login-Adm', component: AdmPageComponent},
  { path: 'pessoa', component: CrudPeopleComponent},
  { path: 'produto', component: CrudProductComponent},
  { path: 'cart', component: CarrinhoComponent},




  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
