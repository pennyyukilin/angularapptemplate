import { Component, OnInit, Inject } from '@angular/core';
import { Person } from '../shared/models';
import { ViewChild } from '@angular/core';
import { AutoCompleteComponent } from '@progress/kendo-angular-dropdowns';
import { DataService } from '../shared/data.service';
import { TrackableComponent } from '../../core/logging/trackable.component';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent extends TrackableComponent implements OnInit {

  public maskedValue: string;
  public sliderValue = 5;
  public numericValue = 5;
  public switchValue = false;
  public min = 0;
  public max = 10;
  public smallStep = 1;
  public listItems: Array<string>;
  public value: Array<string>;

  @ViewChild('autocompletebyid',{static: false}) public autocomplete: AutoCompleteComponent;

  public listPerson: Array<Person>;

  constructor(@Inject(DataService) private dataService: DataService) {
    super();
  }

  ngOnInit() {
     this.listItems = ['Baseball', 'Basketball', 'Cricket', 'Field Hockey', 'Football', 'Table Tennis', 'Tennis', 'Volleyball'];
     this.value = ['Basketball', 'Cricket'];
  }

  handleFilter(value) {
    if (value.length >= 7) {
        this.dataService.fetchPerson(value).subscribe(
          (data) => this.listPerson = data
        );
    } else {
        this.autocomplete.toggle(false);
    }
}


}




