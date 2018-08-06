import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image/image-detail.component';
import {ImageFilterPipe} from './image/shared/filter.pipe';
import { ImageService } from './image/shared/image.service';
import { appRoutes } from './routes/routes.module'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
   
    ImageDetailComponent,
      ImageFilterPipe
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
