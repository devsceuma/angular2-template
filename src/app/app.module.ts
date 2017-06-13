import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routing } from './routs.general';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/menu/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessages } from '../services/validacoes/error-messages';
import { AlunosComponent } from './components/admin/alunos/alunos.component';
import { DataTablesModule } from 'angular-datatables';
import { HomeComponent } from './components/admin/home/home.component';
import { CursosComponent } from './components/admin/cursos/cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ErrorMessages,
    AlunosComponent,
    HomeComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
