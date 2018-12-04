import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerNewComponent } from './customer-new/customer-new.component';
import { RepoDialogComponent } from './repo-dialog/repo-dialog.component';

//material
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import{ MatDialogModule } from '@angular/material/dialog';
import {MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [CustomerListComponent, CustomerCardComponent, CustomerNewComponent, RepoDialogComponent],
  entryComponents:[RepoDialogComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    //material
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatRadioModule,
    MatSnackBarModule
  ]
  
})
export class CustomersModule { }
