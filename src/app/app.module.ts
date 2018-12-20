import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageListComponent } from './components/image-list/image-list.component';
import { ImageLoadService } from './services/image-load.service';

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ScrollingModule,
  ],
  providers: [
    ImageLoadService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
