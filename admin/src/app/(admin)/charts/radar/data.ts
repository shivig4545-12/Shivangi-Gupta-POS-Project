import { type ApexOptions } from 'apexcharts'

export const basicRadarOpts: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    height: 350,
    type: 'radar',
  },
  series: [
    {
      name: 'Series 1',
      data: [80, 50, 30, 40, 100, 20],
    },
  ],
  colors: ['#7f56da'],
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
}

export const polygonFillOpts: ApexOptions = {
  chart: {
    height: 350,
    type: 'radar',
    toolbar: {
      show: false,
    },
  },
  series: [
    {
      name: 'Series 1',
      data: [20, 100, 40, 30, 50, 80, 33],
    },
  ],
  labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  plotOptions: {
    radar: {
      size: 140,
    },
  },
  colors: ['#61844c'],
  markers: {
    size: 4,
    colors: ['#fff'],
    strokeColors: ['#61844c'],
    strokeWidth: 2,
  },
  tooltip: {
    y: {
      formatter: function (val: number) {
        return val.toString()
      },
    },
  },
  yaxis: {
    tickAmount: 7,
    labels: {
      formatter: function (val: number, i): string {
        if (i % 2 === 0) {
          return val.toString()
        } else {
          return ''
        }
      },
    },
  },
}

export const multipleSeriesOpts: ApexOptions = {
  chart: {
    height: 350,
    type: 'radar',
    toolbar: {
      show: false,
    },
  },
  series: [
    {
      name: 'Series 1',
      data: [80, 50, 30, 40, 100, 20],
    },
    {
      name: 'Series 2',
      data: [20, 30, 40, 80, 20, 80],
    },
    {
      name: 'Series 3',
      data: [44, 76, 78, 13, 43, 10],
    },
  ],
  stroke: {
    width: 0,
  },
  fill: {
    opacity: 0.4,
  },
  markers: {
    size: 0,
  },
  legend: {
    offsetY: -10,
  },
  colors: ['#1c84ee', '#ef5f5f', '#4ecac2'],
  labels: ['2011', '2012', '2013', '2014', '2015', '2016'],
}
