import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { ToastrModule } from 'ngx-toastr';
import {MatTabsModule} from '@angular/material/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    NgxGalleryModule
  ],
  exports: [
    MatMenuModule,
    ToastrModule,
    MatTabsModule,
    NgxGalleryModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
