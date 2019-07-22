import {Component} from '@angular/core';
import { MatSlider, MatFormField, MatLabel } from '@angular/material';
import { Form, FormControl } from '@angular/forms';

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
  public color = [''];
  public colors = [
  { name: 'Red to Green', value: [ '#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'] },
  { name: 'Green to Red', value: [ '#006837', '#1a9850', '#66bd63', '#a6d96a', '#d9ef8b', '#fee08b', '#fdae61', '#f46d43', '#d73027', '#a50026'] },
  { name: 'Green Hue', value: [ '#d0f8d0', '#b9f2b8', '#8bea89', '#5ce15a', '#39da36', '#16d413', '#13cf11', '#10c90e', '#0cc30b', '#06b906', '#e3ffe3', '#b0ffb0', '#7dff7d', '#64ff64'] }
  ];
  public colorSelect: FormControl = new FormControl(this.colors[0].value);

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    return value;
  }

  setColor(value: string[]) {
    this.color = value;
  }
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */