import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-message-new',
  templateUrl: './message-new.component.html',
  styleUrls: ['./message-new.component.css']
})
export class MessageNewComponent implements OnInit {

  firstFormGroup : FormGroup;
  secondFormGroup : FormGroup;
  priorities:string[]=['High','Medium','low'];
  departments : Object[]=[
    {
      id:1,
      name:'Complaints'
    },
    {
      id:2,
      name:'Loyalty'
    },
    {
      id:3,
      name:'Promotions'
    }
  ];
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {

    this.firstFormGroup = this.formBuilder.group({
      emailCntrl:['',Validators.required],
      priorityCntrl:['',Validators.required],
      departmentCntrl:['',Validators.required]
    });

    this.secondFormGroup = this.formBuilder.group({
      messageCntrl : ['',Validators.required]
    })
  }

}
