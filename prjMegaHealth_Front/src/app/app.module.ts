import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatToolbarModule} from '@angular/material/toolbar';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './components/home-page/home-page.component';

import { MenuComponent } from './components/menu/menu.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { CarouselBasicComponent } from './components/carousel-basic/carousel-basic.component';
import { DropdownBasicComponent } from './components/dropdown-basic/dropdown-basic.component';
import { FooterComponent } from './components/footer/footer.component';
import { BuyPageComponent } from './components/buy-page/buy-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ProdutosComponent } from './components/produtos/produtos.component';
import { CrudCategoryComponent } from './components/crud/crud-category/crud-category.component';
import { DialogCategoryComponent } from './components/crud/crud-category/dialog-category/dialog-category.component';
import { NavCrudComponent } from './components/crud/nav-crud/nav-crud.component';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { CrudVendorComponent } from './components/crud/crud-vendor/crud-vendor.component';
import { DialogVendorComponent } from './components/crud/crud-vendor/dialog-vendor/dialog-vendor.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AdmPageComponent } from './components/adm-page/adm-page.component';
import { CrudPeopleComponent } from './components/crud/crud-people/crud-people.component';
import { CrudProductComponent } from './components/crud/crud-product/crud-product.component';
import { DialogProductComponent } from './components/crud/crud-product/dialog-product/dialog-product.component';
import { MatSelect, MatSelectModule } from '@angular/material/select';









@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuComponent,
    RegisterPageComponent,
    CarouselBasicComponent,
    DropdownBasicComponent,
    FooterComponent,
    ProdutosComponent,
    CrudCategoryComponent,
    DialogCategoryComponent,
    NavCrudComponent,
    BuyPageComponent,
    CrudVendorComponent,
    DialogVendorComponent,
    LoginPageComponent,
    AdmPageComponent,
    CrudPeopleComponent,
    CrudProductComponent,
    DialogProductComponent,
    
   
    
    
    
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    NgbModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    ModalModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters:true
    }),
    MatSelectModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
