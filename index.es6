import D3 from 'd3';
import React from 'react';

export default class D3SeriesBars extends React.Component {

  // PROP TYPES
  static get propTypes() {
    return {
      test: React.PropTypes.string,
      config: React.PropTypes.object,
    };
  }

  // DEFAULT PROPS
  static get defaultProps() {
    return {};
  }

  // CONSTRUCTOR
  constructor(props) {
    super(props);
    this.state = {};
  }

  // COMPONENT DID MOUNT
  componentDidMount() {
    this.updateBars();
  }

  // COMPONENT DID UPDATE
  componentDidUpdate() {
    this.updateBars();
  }

  // ======= D3 stuff =======

  updateBars() {
    const config = this.props.config;
    // Context and duration
    // (In the long term, we'd need more than one group...)
    const barG = D3.select('.d3-bar-series-group');
    const duration = config.duration;

    // Passed scales:
    const xScale = config.xScale;
    const yScale = config.yScale;

    // Data
    const data = config.data;
    // Bind data
    const barBinding = barG.selectAll("rect")
      .data(data);
    const height = config.bounds.height;

    // ENTER
    // Width is zero by default when new rects are created
     barBinding
      .enter().append("rect")
        .attr("class","d3-bar-rect")
        .attr("y", function(d, i) {
          return yScale(d.category);
        })
        .attr("x", 0)
        .attr("height",yScale.rangeBand())
        .attr("width",100)
        ;
   
    barBinding
      .transition().duration(duration)
        .attr("width", function(d, i) {
          return xScale(d.value);
        })
        .attr("y", function(d) {
          return yScale(d.category);
        })
        .attr("height",yScale.rangeBand())
        ;
   
    barBinding.exit()
      .transition().duration(duration)
      .attr("width", 0)
        .remove();


  }



  // ===== D3 stuff ends =====


  // RENDER
  render() {
    // Axis group
    return (
      <g className="d3-bar-series-group" ref="barSeriesGroup"/>
    );
  }
}
