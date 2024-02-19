import { Component } from '@angular/core';
import { NewComponent } from '../../new/new.component';

@Component({
  selector: 'app-deferrable-views',
  standalone: true,
  imports: [NewComponent],
  templateUrl: './deferrable-views.component.html',
  styleUrl: './deferrable-views.component.scss'
})
export class DeferrableViewsComponent {
  public isTrue = false
}
