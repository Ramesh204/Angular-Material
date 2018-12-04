import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-dialog',
  templateUrl: './repo-dialog.component.html',
  styleUrls: ['./repo-dialog.component.css']
})
export class RepoDialogComponent implements OnInit {
  rep : string;
  constructor() { }

  ngOnInit() {
  }

}
