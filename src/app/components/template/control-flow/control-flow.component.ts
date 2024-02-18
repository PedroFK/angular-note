import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {
  public isTrue = true
  public isFalse = false
  public switchCondition = 'A'

  public itens: Array<{name: string}> = [
    { name: 'Pedro'},
    { name: 'Carlos'},
    { name: 'Jandira'},
    { name: 'Gabriela'},
  ]

  public loadingData$: Observable<string[]> = of([
    'carro',
    'casa',
    'moto'
  ]).pipe(delay(3000))
}
