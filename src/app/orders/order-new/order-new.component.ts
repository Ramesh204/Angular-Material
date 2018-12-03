import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-new',
  templateUrl: './order-new.component.html',
  styleUrls: ['./order-new.component.css']
})
export class OrderNewComponent implements OnInit {
  minDate = new Date();

  dateCntrl : FormControl;

  constructor() { }

  ngOnInit() {
    this.dateCntrl = new FormControl('',[ Validators.required ]);
  }

}
