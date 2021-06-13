import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: 'base',
        loadChildren: () => import('./base/base.module').then(m => m.BaseModule)
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
