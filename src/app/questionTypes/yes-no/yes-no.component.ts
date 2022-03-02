import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-yes-no',
  templateUrl: './yes-no.component.html',
  styleUrls: ['./yes-no.component.scss'],
})
export class YesNoComponent implements OnInit {
  @Input() question: Question; 
  constructor() { }

  ngOnInit() {
    console.log('changes', this.question)
  }

}
