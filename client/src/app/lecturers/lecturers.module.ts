import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LecturersComponent } from './lecturers.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ExperiencePipe } from '../pipes/experience.pipe';

@NgModule({
  declarations: [LecturersComponent, ProfileCardComponent, ExperiencePipe],
  imports: [CommonModule],
})
export class LecturersModule {}
