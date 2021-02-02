import {ReversePipe} from './pipes/reverse.pipe';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [],
  declarations: [
    // Custom pipe
    ReversePipe
  ],
  exports: [
    // Custom pipe
    ReversePipe
  ]
})
export class SharedModule {
}
