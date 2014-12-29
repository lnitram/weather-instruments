weather-instruments
===================

Simple javascript svg-based weather instruments built on top of snap.svg

Download
----
Check the Release-page for the latest version: https://github.com/lnitram/weather-instruments/releases or download
or download the minimized js-file directly at:
https://github.com/lnitram/weather-instruments/releases/download/v0.0.0.0/weather-instruments.min.js

Build
----

```
npm install
bower install
grunt
```

Now there should be a "weather-instruments.min.js" in a new created "build" folder.

Dependencies
----

To use these instruments snap.svg is needed, so make sure that it is part of your javacript-imports

Usage
----
```
var instrument = new wi.Instrument(id,width,height,min,max,label,currentValue);
// id => id of the svg-tag (example: #temp)
// width => width of the svg
// heigth => height of the svg
// min => min value on the scale
// max => max value on the scale
// label => label shown on the buttom of the instrument
// currentValue => value that should be shown
```

Example:
```
<svg id="temp" style="width:200px;height:200px"></svg>
<svg id="barometer" style="width:200px;height:200px"></svg>
<script src="snap.svg-min.js"></script>
<script src="weather-instruments.min.js"></script>
<script type="text/javascript">
  var barometer = new wi.Instrument("#barometer",200,200,960,1060,"hPa", 998);
  var temp =      new wi.Instrument("#temp"     ,200,200,-40,40,"°C"   ,   5);
</script>
```

There is a full working example in the "example"-dir

Check http://elbebilder.de/wetter/ for a live-demo

