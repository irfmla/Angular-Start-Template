import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { BaseComponent } from './base/base.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: 'base',
        component: BaseComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'customer',
                component: CustomerComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: 'base',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
