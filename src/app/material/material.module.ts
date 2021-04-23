import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const material = [
  MatSliderModule,
  MatCardModule,
  MatDividerModule,
  MatInputModule,
  MatButtonModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, material],
  exports: [material],
})
export class MaterialModule {}
