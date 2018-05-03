(function (){

//store all the graphs to load onto the buttons
  var THEVISUALZ = {};

  //place graphs in middle
  var margin = {top: 50, right: 55, bottom: 45, left: 40},
      width  = 1000 - margin.left - margin.right,
      height = 500  - margin.top  - margin.bottom;

  var x = d3.scale.ordinal()
      .rangeRoundBands([0, width], .1);

  var y = d3.scale.linear()
      .rangeRound([height, 0]);

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");

// load in all my colors!
      var color = d3.scale.ordinal()
              .range(["#EA3690", "#E555AB", "#EA78BC", "#E897CB","#EDA2D6", "#F2BBDA","#F9CFE6","#F7E2EE","#7D33BF", "#815ACC", "#8E6DCC", "#9B72BA","#B799D1", "#E0D4E8","#79B343","#AFD18E","#CBEBAB", "#E4F0D9", "#35B1D9","#68C4E3","#86DCEA", "#BBE1EA","#FF9C31","#FFCA8B","#FFE5CC"]);

        var dateLabel = 'date';

//vars to store app groups
        var transportationApps;
        var entertainmentApps;
        var productivityApps;
        var utilityApps;
        var socialApps;
        var allApps;

//store text color

var textcolor;

//style viewbox for the graphs
  var svg = d3.select("#chart").append("svg")
      .attr("id", "thesvg")
      .attr("viewBox", "0 0 1000 500")
      .attr("width",  width  + margin.left + margin.right)
      .attr("height", height + margin.top  + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


// the charts

//productivity

  THEVISUALZ.productivityBarChart = function (data, offset) {
      productivityApps = d3.keys(data[0]).filter(function(key)
      { return key !== dateLabel && key.indexOf("Snapchat") == -1 &&
      key.indexOf("Phone") == -1 && key.indexOf("Venmo") == -1 &&
      key.indexOf("FB Messenger") == -1&& key.indexOf("Yelp") == -1 &&
      key.indexOf("Groupme") == -1&& key.indexOf("Settings") == -1 &&
      key.indexOf("Weather") == -1&& key.indexOf("Reminders") == -1 &&
      key.indexOf("App Store") == -1&& key.indexOf("HUJI") == -1 &&
      key.indexOf("Photos") == -1&& key.indexOf("Spotify") == -1 &&
      key.indexOf("Safari") == -1&& key.indexOf("Uber") == -1 &&
      key.indexOf("Lyft") == -1&& key.indexOf("Google Maps") ==-1 &&
      key.indexOf("Instagram") == -1 && key.indexOf("Messages") == -1;});

      textcolor="#7D33BF";

      parseAndVis(data, productivityApps);
      drawAxis(textcolor);
      drawLegend(productivityApps);
  }

  //transportation

  THEVISUALZ.transportationBarChart = function (data, offset) {
  transportationApps = d3.keys(data[0]).filter(function(key)
      { return key !== dateLabel && key.indexOf("Snapchat") == -1 &&
      key.indexOf("Phone") == -1 && key.indexOf("Venmo") == -1 &&
      key.indexOf("FB Messenger") == -1&& key.indexOf("Yelp") == -1 &&
      key.indexOf("Groupme") == -1&& key.indexOf("Slack") == -1 &&
      key.indexOf("Notes") == -1&& key.indexOf("Docs") == -1 &&
      key.indexOf("Mail") == -1&& key.indexOf("Settings") == -1 &&
      key.indexOf("Weather") == -1&& key.indexOf("App Store") == -1 &&
      key.indexOf("Reminders") == -1&& key.indexOf("HUJI") == -1 &&
      key.indexOf("Safari") == -1&& key.indexOf("Photos") ==-1 &&
      key.indexOf("Instagram") == -1 && key.indexOf("Messages") == -1
      && key.indexOf("Top Hat") == -1 && key.indexOf("Drive") == -1
      && key.indexOf("Spotify") == -1;});
  textcolor="#FF8F08";
    parseAndVis(data,transportationApps);
    drawAxis(textcolor);
    drawLegend(transportationApps);

  }


  //entertainment


  THEVISUALZ.entertainmentBarChart = function (data, offset) {
     entertainmentApps = d3.keys(data[0]).filter(function(key)
      { return key !== dateLabel && key.indexOf("Snapchat") == -1 &&
      key.indexOf("Phone") == -1 && key.indexOf("Venmo") == -1 &&
      key.indexOf("FB Messenger") == -1&& key.indexOf("Yelp") == -1 &&
      key.indexOf("Groupme") == -1&& key.indexOf("Slack") == -1 &&
      key.indexOf("Notes") == -1&& key.indexOf("Docs") == -1 &&
      key.indexOf("Mail") == -1&& key.indexOf("Settings") == -1 &&
      key.indexOf("Weather") == -1&& key.indexOf("App Store") == -1 &&
      key.indexOf("Reminders") == -1&& key.indexOf("Uber") == -1 &&
      key.indexOf("Lyft") == -1&& key.indexOf("Google Maps") ==-1 &&
      key.indexOf("Instagram") == -1 && key.indexOf("Messages") == -1
      && key.indexOf("Top Hat") == -1 && key.indexOf("Drive") == -1;});

      textcolor="#039DD0";

    parseAndVis(data,entertainmentApps);
    drawAxis(textcolor);
    drawLegend(entertainmentApps);

  }

  //utility

  THEVISUALZ.utilityBarChart = function (data, offset) {

      utilityApps = d3.keys(data[0]).filter(function(key)
      { return key !== dateLabel && key.indexOf("Snapchat") == -1 &&
      key.indexOf("Phone") == -1 && key.indexOf("Venmo") == -1 &&
      key.indexOf("FB Messenger") == -1&& key.indexOf("Yelp") == -1 &&
      key.indexOf("Groupme") == -1&& key.indexOf("Slack") == -1 &&
      key.indexOf("Notes") == -1&& key.indexOf("Docs") == -1 &&
      key.indexOf("Mail") == -1&& key.indexOf("HUJI") == -1 &&
      key.indexOf("Photos") == -1&& key.indexOf("Spotify") == -1 &&
      key.indexOf("Safari") == -1&& key.indexOf("Uber") == -1 &&
      key.indexOf("Lyft") == -1&& key.indexOf("Google Maps") ==-1 &&
      key.indexOf("Instagram") == -1 && key.indexOf("Messages") == -1
      && key.indexOf("Top Hat") == -1 && key.indexOf("Drive") == -1;});

      textcolor="#79B343";

    parseAndVis(data,utilityApps);
    drawAxis(textcolor);
    drawLegend(utilityApps);

  }

  //social

  THEVISUALZ.socialBarChart = function (data, offset) {
      socialApps = d3.keys(data[0]).filter(function(key)
      { return key !== dateLabel && key.indexOf("Drive") == -1 &&
      key.indexOf("Top Hat") == -1 && key.indexOf("Slack") == -1 &&
      key.indexOf("Notes") == -1&& key.indexOf("Docs") == -1 &&
      key.indexOf("Mail") == -1&& key.indexOf("Settings") == -1 &&
      key.indexOf("Weather") == -1&& key.indexOf("Reminders") == -1 &&
      key.indexOf("App Store") == -1&& key.indexOf("HUJI") == -1 &&
      key.indexOf("Photos") == -1&& key.indexOf("Spotify") == -1 &&
      key.indexOf("Safari") == -1&& key.indexOf("Uber") == -1 &&
      key.indexOf("Lyft") == -1&& key.indexOf("Google Maps") ==-1;});
      textcolor="#EA3690";

    parseAndVis(data,socialApps);
    drawAxis(textcolor);
    drawLegend(socialApps);

  }

  //all

  THEVISUALZ.allBarChart = function (data) {
    allApps = d3.keys(data[0]).filter(function (key) { return key !== dateLabel;});
    textcolor="grey";

    parseAndVis(data,allApps);
    drawAxis(textcolor);
    drawLegend(allApps);
  }

//clear
  THEVISUALZ.clearAll = function () {
    svg.selectAll("*").remove()
  }


//percent bar charts

//all %
  THEVISUALZ.allBarChartPercentage = function (data,offset) {
    parseAndVisPercent(data, allApps);
    drawAxisPercent();
    drawLegend(allApps);
  }

  //social %

  THEVISUALZ.socialBarChartPercentage = function (data,offset) {
    parseAndVisPercent(data, socialApps);
    drawAxisPercent(textcolor);
    drawLegend(socialApps);
  }


  //productivity %

  THEVISUALZ.prodBarChartPercentage = function (data,offset) {
    parseAndVisPercent(data, productivityApps);
    drawAxisPercent(textcolor);
    drawLegend(productivityApps);
  }

  //utility %

  THEVISUALZ.utilityBarChartPercentage = function (data,offset) {
    parseAndVisPercent(data, utilityApps);
    drawAxisPercent(textcolor);
    drawLegend(utilityApps);
  }
  //entertainment %

  THEVISUALZ.entBarChartPercentage = function (data,offset) {
    parseAndVisPercent(data, entertainmentApps);
    drawAxisPercent(textcolor);
    drawLegend(entertainmentApps);
  }
  //transportation %

  THEVISUALZ.transBarChartPercentage = function (data,offset) {
    parseAndVisPercent(data, transportationApps);
    drawAxisPercent(textcolor);
    drawLegend(transportationApps);
  }

  //draw the axis for %

  function drawAxisPercent() {
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", function(d) {
                return "rotate(-65)"
                });

                //   for ( var x=88; x<width; x+=63)
                //    {
                //           svg.append("rect")
                //               .attr("x", x)
                //               .attr("y", height )
                //               .attr("width", 17)
                //               .attr("height", 7)
                //               .style("fill", "grey")
                //               .style("opacity", "0.4");
                // }
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .style("fill", textcolor)

      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .style("fill", "black")

        .text("Percent");
  }

  //draw the axis for bar charts


  function drawAxis(textcolor) {
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")

            .attr("transform", function(d) {
                return "rotate(-65)"
              });

  for ( var x=88; x<width; x+=63)
   {
          svg.append("rect")
              .attr("x", x)
              .attr("y", height )
              .attr("width", 17)
              .attr("height", 7)
              .style("fill", "grey")
              .style("opacity", "0.4");
}

    svg.append("g")

        .attr("class", "y axis")
        .call(yAxis)
        .style("fill", textcolor)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
          .style("fill", "black")
        .text("Minutes");

  }

  //draw the legend

  function drawLegend (appNames) {
    var legend = svg.selectAll(".legend")
        .data(appNames.slice().reverse())
      .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function (d, i) { return "translate(55," + i * 15 + ")"; });

    legend.append("rect")
        .attr("x", width - 10)
        .attr("width", 10)
        .attr("height", 10)
        .style("fill", color);

    legend.append("text")
        .attr("x", width - 12)
        .attr("y", 6)
        .attr("dy", ".35em")
        .style("text-anchor", "end")
        .text(function (d) { return d; });
  }


  //pop up

  function removeOverlays () {
    $('.popover').each(function() {
      $(this).remove();
    });
  }

  function showPopover (d) {
    $(this).popover({
      title: d.name,
      placement: 'auto top',
      container: 'body',
      trigger: 'manual',
      html : true,
      content: function() {
        return "Date: " + d.label +
               "<br/>Minutes: " + d3.format(",")(d.value ? d.value: d.y1 - d.y0); }
    });
    $(this).popover('show')
  }


  function showPopoverPercent (d) {
    $(this).popover({
      title: d.name,
      placement: 'auto top',
      container: 'body',
      trigger: 'manual',
      html : true,
      content: function() {
        return "Date: " + d.date +
               "<br/>Percent: " + d3.format(",")(Math.floor(d.y_pct.toFixed(2)*100)); }
    });
    $(this).popover('show')
  }

//the parsing and visualizing
  function parseAndVis(data, appNames){

    data.forEach(function (d) {

      var y0 = 0;
      d.mapping = appNames.map(function (name) {
        return {
          name: name,
          label: d[dateLabel],
          y0: y0,
          y1: y0 += +d[name]
        };
      });
      d.total = d.mapping[d.mapping.length - 1].y1;
    });
    // parseData();
    x.domain(data.map(function (d) { return d.date; }));
    y.domain([0, d3.max(data, function (d) { return d.total; })]);

    var selection = svg.selectAll(".series")
        .data(data)
      .enter().append("g")
        .attr("class", "series")
        .attr("transform", function (d) { return "translate(" + x(d.date) + ",0)"; });

        selection.selectAll("rect")
          .data(function (d) { return d.mapping; })
        .enter().append("rect")
          .attr("width", x.rangeBand())
          .attr("y", height)
          .attr("height",0)
          .style("fill", function (d) { return color(d.name); })

          .on("mouseover", function (d) { showPopover.call(this, d); })
          .on("mouseout",  function (d) { removeOverlays(); })


          selection.selectAll("rect").transition().duration(2000).attr("height", function (d) { return y(d.y0) - y(d.y1) })
          .attr("y", function (d) { return y(d.y1);});

  }

  function parseAndVisPercent(data, appNames){
    data.forEach(function (d) {
      var y0 = 0;
      d.apps = appNames.map(function (name)   {
         return {date:d.dateLabel, name: name,
            y0: y0,
            y1: y0 += +d[name]};
          });

         d.total = d.apps[d.apps.length - 1].y1;// the last row
      d.pct = [];

      for (var i=0;i <d.apps.length;i ++ ){

        var y_coordinate = +d.apps[i].y1/d.total*100;
          var y_height1 = (d.apps[i].y1)/d.total*100;
        var y_height0 = (d.apps[i].y0)/d.total*100;
        var y_pct = (y_height1 - y_height0);
        d.pct.push({
          y_coordinate: y_coordinate,
          y_height1: y_height1,
          y_height0: y_height0,
          name: d.apps[i].name,
          date: d.date,
          y_pct: y_pct

        });
      }
       });
    // parseData();
    x.domain(data.map(function (d) { return d.date; }));
    y.domain([0,100])


    var selection = svg.selectAll(".series")
        .data(data)
      .enter().append("g")
        .attr("transform", function(d) {
      return "translate(" + "0 "+ ",0)";

    });

    selection.selectAll("rect")
    .data(function(d) {
      return d.pct;
    })
    .enter().append("rect")
    .attr("width", x.rangeBand())
    .attr("y", height)
    .attr("height",0)
    .attr("x",function(d) {return x(d.date)})
    .attr("fill", function(d){return color(d.name)})
    .attr("id",function(d) {return d.date})
    .attr("id",function(d) {
      return d.date
})

    .on("mouseover", function (d) {
      showPopoverPercent.call(this, d);

    })
    .on("mouseout",  function (d) { removeOverlays(); })

    selection.selectAll("rect").transition().duration(2000)
    .attr("height", function(d) {
      return y(d.y_height0) - y(d.y_height1); //distance
    })
    .attr("y", function (d) {
      return y(d.y_coordinate);
    });
  }

  THEVISUALZ.onResize = function () {
    var aspect = 1000 / 500, chart = $("#thesvg");
    var targetWidth = chart.parent().width();
    chart.attr("width", targetWidth);
    chart.attr("height", targetWidth / aspect);
  }

  window.THEVISUALZ = THEVISUALZ;

}())
