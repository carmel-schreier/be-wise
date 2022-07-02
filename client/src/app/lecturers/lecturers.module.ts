import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LecturersComponent } from './lecturers.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';



@NgModule({
  declarations: [
    LecturersComponent,
    ProfileCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LecturersModule { }
