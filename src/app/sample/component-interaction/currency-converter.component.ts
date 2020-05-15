import { Component, OnInit } from '@angular/core';
import { Conversion } from '../shared/models';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html'
})
export class CurrencyConverterComponent implements OnInit {

    msg = '---';
    comment = 'Test Comement';
    size = 150;
    selected: Conversion;

    conversions = [
      {
        fromUnit: 'meter',
        toUnit: 'kilometer',
        offset: 0,
        ratio: 1000
      },
      {
        fromUnit: 'liter',
        toUnit: 'kiloliter',
        offset: 0,
        ratio: 1000
      },
    ];

    constructor() { }

    ngOnInit() {
    }

    showTime(e: any) {
      this.msg = new Date().toLocaleString();
      console.log(e);
    }

    onclick(conversion: Conversion) {
      this.selected = {
        fromUnit: conversion.fromUnit,
        toUnit: conversion.toUnit,
        offset: 0,
        ratio: 1000
      };
    }

    onedited(conversion: Conversion) {
      // tslint:disable-next-line:prefer-const
      for (let item of this.conversions) {
        if (item.fromUnit === conversion.fromUnit) {
          item.toUnit = conversion.toUnit;
          item.offset = conversion.offset;
          item.ratio = conversion.ratio;
        }
      }
      this.selected = null;
      }
}
