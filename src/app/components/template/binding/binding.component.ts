import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.scss'
})
export class BindingComponent {
  public prop = 'Esse é um exemplo de propriedade'
  public name = 'Pedro'
  public example = '{{assim que se usa}}'
  public age = 20
  public nmb1: number = 12
  public isDisable = false
  public isEnable = true
  public srcValue = 'https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png'
  public soma = 'Soma'
  public testeDeCor = 'Muda de cor conforme a idade'

  public isTextDecorated = this.nmb1 >=10 ? 'underline' : 'none'
  
  constructor() {
    setTimeout(() => {
      this.prop = 'Nova prop'
    }, 2000);
  }

  public sum() {
    return this.age++;
  }

  public sub() {
    return this.age--
  }

  public onKeyDown(event: Event) {
    return console.log(event)
  }

  public onMouseMove(event: MouseEvent) {
    return console.log({
      clientX: event.clientX,
      clientY: event.clientY
    })
  }
}
