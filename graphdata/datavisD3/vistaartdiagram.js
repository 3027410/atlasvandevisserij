const data = [{
    name: 'Chrome',
    value: 10
}, {
    name: 'Safari',
    value: 20
}, {
    name: 'IE',
    value: 30
}, {
    name: 'Firefox',
    value: 40
}];

const svg = d3.select('svg'),
    width = svg.attr('width'),
    height = svg.attr('height');

const radius = 200;
const g = svg.append('g').attr('transform', `translate(${width/2}, ${height/2})`);

const color = d3.scaleOrdinal(['red', 'blue', 'green', 'gray']);

const pie = d3.pie().sort(null).value(d => d.value);

const path = d3.arc().outerRadius(radius).innerRadius(0);

const label = d3.arc().outerRadius(radius).innerRadius(radius - 90);

const pies = g.selectAll('.arc').data(pie(data)).enter().append('g').attr('class', 'arc');

pies.append('path').attr('d', path).attr('fill', d => color(d.data.value));

pies.append('text')
  .attr('transform', function(d) {
    return `translate(${label.centroid(d)})`;})
  .text(d => d.data.name)
  
}