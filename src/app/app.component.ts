import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SampleCardComponent } from './sample-card/sample-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SampleCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'angular';

  text: string = "";

  @ViewChild("ref1")
  firstCard: SampleCardComponent | undefined;

  @ViewChildren(SampleCardComponent)
  cards: QueryList<SampleCardComponent> | undefined;

  cardArray: any = [
    {
      id: 1,
      name: "Card 1",
      description: "This is card 1",
      status: true
    },
    {
      id: 2,
      name: "Card 2",
      description: "This is card 2",
      status: false
    },
    {
      id: 3,
      name: "Card 3",
      description: "This is card 3",
      status: true
    }
];

  constructor(){
    console.log("AppComponent constructor", this.firstCard);
  }
  ngAfterViewInit(): void {
    // console.log("AppComponent ngAfterViewInit", this.cards);
    this.cards?.changes.subscribe((cards: QueryList<SampleCardComponent>) => {
      console.log("AppComponent ngAfterViewInit", cards);
    }
    );
  }

  emitfunc(date: any){
    console.log("AppComponent emitfunc", date);
    console.log("view child", this.firstCard);
    this.cardArray.push({id: 4, name: "Card 4", description: "This is card 4", status: true});
  }



}
