import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sample-card',
  standalone: true,
  imports: [],
  templateUrl: './sample-card.component.html',
  styleUrl: './sample-card.component.css'
})
export class SampleCardComponent {

  @Input() 
  card: any;

  @Output()
  eventEmitter1: EventEmitter<Date> = new EventEmitter();


  onclickfunc(){
    const date = new Date();
    this.eventEmitter1.emit(date);
  }



}
