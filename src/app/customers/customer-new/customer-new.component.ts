import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import{MatSnackBar} from '@angular/material';
import { RepoDialogComponent } from '../repo-dialog/repo-dialog.component';


@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})
export class CustomerNewComponent implements OnInit {

  emailFormControl : FormControl;

  constructor(public dialog:MatDialog, public snackBar:MatSnackBar) { }

  ngOnInit() {
    this.emailFormControl = new FormControl('',[
      Validators.required,
      Validators.email
    ])
  }

  openRepDialog() {
    const dialogRef = this.dialog.open(RepoDialogComponent,{
      width:'250px',
      data : {}
    });

    dialogRef.afterClosed().subscribe(result=>{
      alert(`User Choice ${result}`);
    });

  }

  openUndoSnackBar(){
    const snackBarRef= this.snackBar.open('Customer Saved','UNDO',{
      horizontalPosition:'end'
    });
    snackBarRef.onAction().subscribe(()=>{
      alert('Undo that save!');
    });
  }
}
