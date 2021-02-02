import {ReversePipe} from './pipes/reverse.pipe';
import {NgModule} from '@angular/core';
import {HighlightDirective} from './directives/highlight.directive';

@NgModule({
  imports: [],
  declarations: [
    // Custom pipe
    ReversePipe,
    // Directiva custom
    HighlightDirective
  ],
  exports: [
    // Custom pipe
    ReversePipe,
    // Directiva custom
    HighlightDirective
  ]
})
export class SharedModule {
}
