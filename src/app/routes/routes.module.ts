import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router';
import { GalleryComponent } from '../gallery/gallery.component'
import { ImageDetailComponent} from '../image/image-detail.component'
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class RoutesModule { }
export const appRoutes: Routes =[
{path:'gallery',component:GalleryComponent},
{path: 'image/:id', component:ImageDetailComponent},
{path: '', redirectTo:'/gallery', pathMatch:'full'}




]