import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Iuser } from './modules/landing/models/Iuser';
import { HomeComponent } from "./modules/landing/components/home/home.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColorfulDirective } from './colorful.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule,FormsModule,ColorfulDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Jahanbin';



  user:Iuser={
name:'mahbod',
familyName:'Jahanbin',
age:14
  }


  users:Iuser[]=
  [
    {
    name:'Iman',
    familyName:'Jahanbin',
    age:14
    },
    {
      name:'rezvan',
      familyName:'Jahanbin',
      age:45
    },
    {
      name:'maya',
      familyName:'Jahanbin',
      age:8
    },
    {
      name:'ali',
      familyName:'Majlesi',
      age:32
    }
    ]

    onSelectChanges(event: Event) {
      const selectedUser = (event.target as HTMLSelectElement).value;
      console.log(selectedUser);
    }
}
