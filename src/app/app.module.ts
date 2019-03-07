import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote.component';
import { FormsModule } from '@angular/forms'
import { CounterComponent } from './counter.component';
import { ConvertPipe } from './convert.pipe';
import { FormatDirective } from './format.directive';
import { BorderComponent } from './border.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from './posts.service';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    CounterComponent,
    ConvertPipe,
    FormatDirective,
    BorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
