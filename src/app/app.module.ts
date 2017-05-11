import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import {routing} from './routes.general';
import {AuthGuard} from './auth.guard';
import {LoginComponent} from './components/login/login.component';
import { AppComponent } from './app.component';
import {AdminComponent} from './components/admin/general/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
