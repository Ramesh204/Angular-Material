import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderNewComponent } from './order-new/order-new.component';

//material
import { MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule } from '@angular/material/button';
import {MatCardModule } from '@angular/material/card';
import {MatDatepickerModule } from '@angular/material/datepicker';
import {MatInputModule } from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { MatMomentDateModule} from '@angular/material-moment-adapter';

@NgModule({
  declarations: [OrderListComponent, OrderNewComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    //material
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    MatMomentDateModule
  ]
})
export class OrdersModule { }
