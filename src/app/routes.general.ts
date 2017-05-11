import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule, provideRoutes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AdminComponent} from './components/admin/general/admin.component';
import {AuthGuard} from './auth.guard';

const APP_ROUTES:Routes=[
    { path:'', component:LoginComponent },
    { path:'admin',component:AdminComponent,canActivate: [AuthGuard],children:[
        //{path:'add-user',component:RegisterUserComponent},
        //{path:'manager-user',component:ManagerUserComponent},
        //{path:'project',component:ProjectComponent}
    ]}
]

export const routing:ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);