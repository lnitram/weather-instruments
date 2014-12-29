var wi= (function(Snap) {
  var self = {};
  self.Gauge = function(id,width,height,min,max,legend, value) {
    var width = width;
    var height = height;
    var min = min;
    var max = max;
    var x = width/2.;
    var y = height/2.
    var r = ((width<height)?width/2.:height/2.)*0.99;
    var steps = max - min;
    var angle = 300/steps;
    var arrow ;
    var arrowangle = -150 + (value-min)*angle;
    var s = Snap(id);
    var bigCircle = s.circle(x, y, r);

    bigCircle.attr({
      fill: "#eeeeee",
      stroke: "#000",
      strokeWidth:1
    });
  
    var center = s.circle(x,y,r*0.07);
    var counter = 0;
    var label = min;
    for (var i = 0; i <= steps; i++) {
      var rot = (i*angle)-150;
      var length = 0.05 * r;
      if (counter%5 == 0) {
        if (counter%10==0) {
          length = 0.15 * r;
          var t = s.text(x,0.13*r,""+label).attr({fontSize:((r/100.)*10) + "px", textAnchor: 'middle', fontFamily: "sans-serif"});
          t.transform("r"+rot+"," + x + "," + y );
          label += 10;
        } else {
          length = 0.12 * r;
        }
      }
      var t1 = s.line(x, 0.3*r, x, (0.3*r)-length);
      t1.attr({stroke: "#000",strokeWidth:1});
      t1.transform("r"+rot+","+x+","+y);
      counter++;
    }
    var desc = s.text(x,y,legend);

    desc.attr({
      fontFamily: "sans-serif",
      fontSize:((r/100.)*0.7) + "em",
      textAnchor: 'middle'
    });

    desc.transform("t0," + r*0.80);
    arrow = s.line(x,y,x,r-r*0.80);
    arrow.attr({stroke: "#A00",strokeWidth:3});
    arrow.transform("r" + arrowangle + "," + x + "," + y);

    this.changeValue = function(value) {
      var arrowangle = -150 + (value-min)*angle;
      arrow.transform("r" + arrowangle + "," + x + "," + y);
    }
  };
  return self;
})(Snap);


