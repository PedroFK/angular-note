import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Component
import { NewComponent } from './components/new/new.component';
import { BindingComponent } from './components/template/binding/binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { ControlFlowComponent } from './components/template/control-flow/control-flow.component';
import { DeferrableViewsComponent } from './components/template/deferrable-views/deferrable-views.component';
import { SignalsComponent } from './components/signals/signals/signals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NewComponent,
    BindingComponent,
    TemplateVariablesComponent,
    ControlFlowComponent,
    DeferrableViewsComponent,
    SignalsComponent,
  ],
  template: `
    <h1>Curso Angular</h1>
  <!-- 
  <app-new></app-new>
  <app-binding></app-binding>
  <app-template-variables />
  <app-control-flow/>
  <app-deferrable-views/>
  -->
  <app-signals/>
  `,
})
export class AppComponent {
  title = 'angular-project';
}
