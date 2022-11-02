import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.css']
})
export class ObjectivesComponent implements OnInit {
  @Input() objectives = '';
  constructor() { }

  ngOnInit(): void {
  }

}
