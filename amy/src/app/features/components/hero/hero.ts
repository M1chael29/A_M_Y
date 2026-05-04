import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class Hero implements OnInit {

  constructor() {}

  ngOnInit(): void {
    console.log('AMY_HERO: Deploy_Marine_Theme_Active');
  }
}
