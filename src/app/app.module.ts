import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Importe o HttpClientModule

import { AppComponent } from './app.component';
import { UploadService } from './upload.service'; // Importe o UploadService

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Adicione o HttpClientModule aos imports
  ],
  providers: [
    UploadService // Adicione o UploadService aos provedores
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
