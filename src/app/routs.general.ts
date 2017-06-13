import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, provideRoutes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/menu/admin.component';
import { AlunosComponent } from './components/admin/alunos/alunos.component';
import { HomeComponent } from './components/admin/home/home.component';
import { CursosComponent } from './components/admin/cursos/cursos.component';

const APP_ROUTES: Routes = [
    { path: '', component: LoginComponent },
    {
        path: 'admin', component: AdminComponent, children: [
            { path: 'home', component: HomeComponent },
            { path: 'alunos', component: AlunosComponent },
            { path: 'cursos', component: CursosComponent }
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);