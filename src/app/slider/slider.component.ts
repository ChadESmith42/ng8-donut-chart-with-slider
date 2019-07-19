import {Component} from '@angular/core';
import { MatSlider } from '@angular/material';

/**
 * @title Basic slider
 */
@Component({
  selector: 'app-slider',
  templateUrl: 'slider.component.html',
  styleUrls: ['slider.component.css'],
})
export class SliderComponent {
  public value=0;

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    return value;
  }
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */