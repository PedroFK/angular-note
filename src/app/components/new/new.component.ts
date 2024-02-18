import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [CommonModule, TestComponent],
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss'
})
export class NewComponent {

}
