import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
    {
	    path: 'layout',
	    component: LayoutComponent,
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
        redirectTo: 'layout',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
