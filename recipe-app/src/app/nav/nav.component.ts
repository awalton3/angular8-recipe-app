import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  @Output() toggledDrawer = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  onToggleDrawer() {
    this.toggledDrawer.emit();
  }

}
