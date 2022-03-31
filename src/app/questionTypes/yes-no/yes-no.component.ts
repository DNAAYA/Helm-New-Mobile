import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-yes-no',
  templateUrl: './yes-no.component.html',
  styleUrls: ['./yes-no.component.scss'],
})
export class YesNoComponent implements OnInit {
  @Input() question: any; 
  @Input() auditKey: string ; 

  @Output() newItemEvent = new EventEmitter<string>();
  constructor(
    private db: DatabaseService
  ) { }

 async ngOnInit() {
  }




}
