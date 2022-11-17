import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { FormsModule } from '@angular/forms';
 import { HttpClientModule } from '@angular/common/http';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExchangerComponent } from './components/exchanger/exchanger.component'; 
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
