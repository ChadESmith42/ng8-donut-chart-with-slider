import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatSliderModule, MatFormFieldModule, MatSelectModule } from '@angular/material';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SliderComponent } from './slider/slider.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatSliderModule, BrowserAnimationsModule, MatFormFieldModule, MatSelectModule ],
  declarations: [ AppComponent, HelloComponent, SliderComponent, DonutChartComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
