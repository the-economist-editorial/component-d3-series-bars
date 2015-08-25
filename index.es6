import D3 from 'd3';
import React from 'react';

export default class D3SeriesBars extends React.Component {

  // // PROP TYPES
  // static get propTypes() {
  //   return {
  //     test: React.PropTypes.string,
  //     config: React.PropTypes.object,
  //   };
  // }

  // // DEFAULT PROPS
  // static get defaultProps() {
  //   return {};
  // }

  // // CONSTRUCTOR
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  // componentWillMount() {
  //   console.log(this.props);
  // }

  // // COMPONENT DID MOUNT
  // componentDidMount() {
  //   return;
  //   // this.setXAxisConfig();
  //   // this.updateXAxis();
  // }

  // // COMPONENT DID UPDATE
  // componentDidUpdate() {
  //   return;
  //   // this.setXAxisConfig();
  //   // this.updateXAxis();
  // }


  // RENDER
  render() {
    // Axis group
    return (
      <g className="d3-bar-series-group" ref="barSeriesGroup"/>
    );
  }
}
