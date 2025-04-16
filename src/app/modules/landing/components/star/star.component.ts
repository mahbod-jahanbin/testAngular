import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-star',
  imports: [FormsModule, CommonModule],
  templateUrl: './star.component.html',
  styleUrl: './star.component.scss',
  standalone: true,
})


export class StarComponent implements OnInit 
{


@Input() rating :number=4;
@Output() starClicked=new EventEmitter<number>();
width:number=90;


  constructor(){

  }

  title = 'star';
  ngOnInit(): void {
    this.width = (this.rating * 90) / 5;
  }

public onclick(){
  this.starClicked.emit(this.rating);

}


}
