import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Conversion } from '../shared/models';

@Component({
  selector: 'app-conversion-edit',
  templateUrl: './conversion-edit.component.html'
})
export class ConversionEditComponent {

  @Input() item: Conversion;
  @Output() edited = new EventEmitter<Conversion>();

  onsubmit() {
    console.log('Submit');
    this.edited.emit(this.item);

  }
}
