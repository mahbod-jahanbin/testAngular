import { Component } from '@angular/core';
import myStr from '../../models/my-str';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StarComponent } from "../star/star.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [FormsModule, CommonModule, StarComponent],
})
export class HomeComponent {
  title = 'Home';

  public viewModel = new myStr('Mahbod', 'Jahanbin');

  public handleChangeName(change: Event) {
    const myInput = change.target as HTMLInputElement;
    this.viewModel.Name = myInput.value;
  }

  users:string[]=['ali','hamid','reza','maya','Rasul'];


  ratings:number[]=[3.5,2.5,1.5,4.5,2];

 public onStarClicked(rating:number){

    console.log(`the rating is ${rating}`);
  }
    // public handleChangeFamily(change: Event) {
  //   const myInput = change.target as HTMLInputElement;
  //   this.FullName_home.Family = myInput.value;
  // }
}
