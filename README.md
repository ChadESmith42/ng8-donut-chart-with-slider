# donut-chart-with-slider-control
The purpose of this repo is to create an Angular 7+ component that creates a dynamic SVG donut chart.

I used the great how-to from Mark Caron, [Scratch-made SVG Donut & Pie Charts in HTML5](https://medium.com/@heyoka/scratch-made-svg-donut-pie-charts-in-html5-2c587e935d72), to create the SVG pie chart.

## Component Use
Donut charts are intended to display a percent value. This chart only displays a single value against a gray background. The Donut-Chart Component accepts a single input value, oddly called value. Based on Mark's excellent advise, the donut has a circumference of 100, which makes calculating stroke (or the shaded area) length very easy. You can input a decimal, but whole numbers work just fine.

## Customizing the colors
Within the Donut Chart Component, you will notice a private function called ChangeColor. The purpose of this function is to evaluate the current value of the stroke and assign a color based on a hard-coded array of color options. You could refactor the function to use an array of color hue objects and pass the color palette as an argument into the component.

```typescript
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
```

I used Mikel Bitson's (@mbitson) awesome [Material Design Palette/Theme Generator](https://github.com/mbitson/mcg) to create a green-hued color palette for the current verion. I slightly modified the first color to give it more contrast against the greay background. The palette is stored as an array. I injected some logic to handle changing the color based on the value of the chart.

If you wanted a red-to-green (or vice versa) palette, refactor with these values:
```typescript
const color = [
'#a50026',
'#d73027',
'#f46d43',
'#fdae61',
'#fee08b',
'#d9ef8b',
'#a6d96a',
'#66bd63',
'#1a9850',
'#006837'
];
```

# **"Let's get crazy. What the heck!" - Bob Ross**

## Enhancements
While I want to continue to expand this concept and add additional features, some features may be placed in seperate components. Here are the potential future enhancements:
- [ ] Multiple values on the same donut chart
- [ ] A color-coded legend, with values
- [ ] The ability to toggle options/features: like color or labels
- [ ] The ability to add an icon or other image to the center of the donut chart

## Bugs, Issues, and Pull-Requests
If you are looking to contribute, please feel free to submit a bug report or a pull-request.

