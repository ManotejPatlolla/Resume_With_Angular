import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.css']
})
export class DeclarationComponent implements OnInit {
 @Input() declaration = '';
  constructor() { }

  ngOnInit(): void {
  }

}
