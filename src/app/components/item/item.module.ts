import { ItemComponent } from './item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [ItemComponent],
  declarations: [ItemComponent],
  imports: [CommonModule]
})
export class ItemModule { }
