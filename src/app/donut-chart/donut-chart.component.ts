import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {
  @Input() value: number;
  public r: number = 100 / (2 * Math.PI);
  public total = 100;
  public offset = 25;
  public dashArray = '0 0';
  public color = '';


  constructor() { }

  ngOnInit() {
    console.log('Radius: ', this.r);
    this.dashArray = this.SetDashArray(this.value);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.SetDashArray(this.value);
    this.color = this.ChangeColor(this.value);
  }

  private SetDashArray(value: number) {
    this.dashArray = 
      value.toString() + ' ' + this.GetEndDashArray(value).toString();
    console.log('Dasharray: ', this.dashArray);
    return this.dashArray;
  }

  private GetEndDashArray(value: number):number {
    const end = (this.total - value);
    return end;
  }

  private ChangeColor(value: number):string {
    let range = 0;
    const color = [
      '#d0f8d0',
      '#b9f2b8',
      '#8bea89',
      '#5ce15a',
      '#39da36',
      '#16d413',
      '#13cf11',
      '#10c90e',
      '#0cc30b',
      '#06b906',
      '#e3ffe3',
      '#b0ffb0',
      '#7dff7d',
      '#64ff64'];
    if (value < 10) {
      return color[range];
    } else {
      range = Math.round(value / 10);
    }
    return color[range - 1];
  }

}