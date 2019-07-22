import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {
  @Input() value: number;
  @Input() colorValues: string[];
  public r: number = 100 / (2 * Math.PI);
  public total = 100;
  public offset = 25;
  public dashArray = '0 0';
  public color = '';


  constructor() { }

  ngOnInit() {
    this.dashArray = this.SetDashArray(this.value);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.SetDashArray(this.value);
    this.color = this.ChangeColor(this.value);
  }

  private SetDashArray(value: number) {
    this.dashArray = 
      value.toString() + ' ' + this.GetEndDashArray(value).toString();
    return this.dashArray;
  }

  private GetEndDashArray(value: number):number {
    const end = (this.total - value);
    return end;
  }

  private ChangeColor(value: number):string {
    let range = 0;
    const color = this.colorValues;
    if (value < 10) {
      return color[range];
    } else {
      range = Math.round(value / 10);
    }
    return color[range - 1];
  }

}