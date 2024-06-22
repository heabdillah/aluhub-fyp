import { Component , Input, OnInit} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
@Input() title: String;
@Input() subtitle: String;
constructor(){
  this.title = '';  // Empty string for title
  this.subtitle = ''; // Empty string for subtitle
 }
  ngOnInit(): void {

  }
}

