import { Directive, HostBinding, HostListener } from '@angular/core';
import { match } from 'assert';

@Directive({
  selector: '[appColorful]'
})
export class ColorfulDirective {

  availableColors=['#BD0000','#F64343','#6F0000','#BD0000','#BD0000','#BD0000','black','orange','parple','yellow','#BD0000','#BD0000','#BD0000','#BD0000','#BD0000'];
 @HostBinding('style.color') color: string;
 @HostBinding('style.border-color') borderColor:string;
 @HostListener('keydown')newColor(){
  const randomColorIndex=Math.floor(Math.random()* this.availableColors.length);
  this.color=this.borderColor=this.availableColors[randomColorIndex];
 }

}
