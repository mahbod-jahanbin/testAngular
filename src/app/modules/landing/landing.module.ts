import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { HomeComponent } from './components/home/home.component';
import { StarComponent } from './components/star/star.component';

@NgModule({
  declarations: [
  
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeComponent,
    StarComponent,
    AppComponent
  ],
})
export class LandingModule {}
