import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';
import { SidemenuComponent } from './sidemenu.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
    declarations: [
        BaseComponent,
        SidemenuComponent
    ],
    imports: [
        CommonModule,
        BaseRoutingModule,
    ],
    exports: [
        BaseComponent,
        SidemenuComponent
    ]
})
export class BaseModule { }
