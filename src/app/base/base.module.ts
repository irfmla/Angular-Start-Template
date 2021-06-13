import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';
import { SidemenuComponent } from './sidemenu.component';



@NgModule({
    declarations: [
        //BaseComponent,
        //SidemenuComponent
    ],
    imports: [
        CommonModule,
        BaseRoutingModule
    ]
})
export class BaseModule { }
