import { Component } from '@angular/core';
import myStr from '../../models/my-str';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class HomeComponent {
  title = 'Home';

  public viewModel = new myStr('Mahbod', 'Jahanbin');

  public handleChangeName(change: Event) {
    const myInput = change.target as HTMLInputElement;
    this.viewModel.Name = myInput.value;
  }

  users:string[]=['ali','hamid','reza','maya','Rasul'];

  // public handleChangeFamily(change: Event) {
  //   const myInput = change.target as HTMLInputElement;
  //   this.FullName_home.Family = myInput.value;
  // }
}
