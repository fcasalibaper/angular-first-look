import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  
  constructor() {}

  @Input() els : any;

  ngOnInit() {
    console.log('el: ', this.els)
  }

}
