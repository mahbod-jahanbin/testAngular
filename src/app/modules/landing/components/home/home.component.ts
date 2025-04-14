import { Component } from '@angular/core';
import myStr from '../../models/my-str';
import { LoginComponent } from '../../../auth/components/login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [],
})
export class HomeComponent {
  title = 'Home';
  public FullName_home = new myStr('mahbod', 'jahanbin');

  public handleChangeName(change: Event) {
    const myInput = change.target as HTMLInputElement;
    this.FullName_home.Name = myInput.value;
  }
  public handleChangeFamily(change: Event) {
    const myInput = change.target as HTMLInputElement;

    this.FullName_home.Family = myInput.value;
  }
}
