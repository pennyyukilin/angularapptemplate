import { Component, Input } from '@angular/core';
import { Conversion } from '../shared/models';

@Component({
  selector: 'app-conversion-detail',
  templateUrl: './conversion-detail.component.html'
})
export class ConversionDetailComponent {

  private _item: Conversion;

  @Input()
  set item(_item: Conversion) {
    this._item = _item;
  }

  get item() {
    return this._item;
  }

}
