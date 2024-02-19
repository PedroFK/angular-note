import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public firtName = 'Pedro'
  public lastName = 'Henrique'

  public fullName = this.firtName + this.lastName

  public array = [1]

  constructor() {
    
  }

  public updateName() {
    
  }

  public updateArray() {
    
  }
}
