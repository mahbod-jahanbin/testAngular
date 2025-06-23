import { Component, Input, input, OnChanges, OnInit } from '@angular/core';
import myStr from '../../models/my-str';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StarComponent } from "../star/star.component";
import { Iuser } from '../../models/Iuser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [FormsModule, CommonModule, StarComponent],
providers: [],
})
export class HomeComponent implements OnInit{
  title = 'Home';


  private _user:Iuser;
  counter:number=0;

 @Input()
  set user(user:Iuser){
    this._user=user;
    this.counter++;
  
  }
  get user():Iuser{
 return this._user
  }


ngOnInit():void{
  console.log(this._user);
}



  public viewModel = new myStr('Mahbod', 'Jahanbin');

  public handleChangeName(change: Event) {
    const myInput = change.target as HTMLInputElement;
    this.viewModel.Name = myInput.value;
  }

  users:string[]=['ali','hamid','reza','maya','Rasul'];

MyUser:myStr[]= 
[
  new myStr('Mahbod','Jahanbin') ,
  new myStr('ali','Jahanbin') ,
  new myStr('maya','Jahanbin') ,
  new myStr('reza','Jahanbin') ,
  new myStr('masoud','Jahanbin')
 ]

  usrs:Iuser[]=[
  {

    name:'mahbod',
    familyName:'jahanbin',
    age:40

  },
  {

    name:'maya',
    familyName:'jahanbin',
    age:7
  },
  {

    name:'moloud',
    familyName:'kashkouli',
    age:7
  }
 ];


 selectedUser: Iuser;

public OnselectChange(user:Iuser){

console.log(`the selected user is ${user.name}`);

}

  ratings:number[]=[3.5,2.5,1.5,4.5,2];

 public onStarClicked(rating:number){

    console.log(`the rating is ${rating}`);
  }
    // public handleChangeFamily(change: Event) {
  //   const myInput = change.target as HTMLInputElement;
  //   this.FullName_home.Family = myInput.value;
  // }
}

 

