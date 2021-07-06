import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { appRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [
    SidebarComponent
    
  ],
  exports:[
    SidebarComponent
  ],
  imports: [
    appRoutingModule,
    CommonModule
    
    
  ]
})
export class ShareModule { }
