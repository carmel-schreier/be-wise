import { Lecturer } from './../../shared/types';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.sass'],
})
export class ProfileCardComponent implements OnInit {
  @Input()
  lecturerDetails!: Lecturer;

  constructor() {}

  ngOnInit(): void {}
}
