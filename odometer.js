import React from "react";
import { render } from "react-dom";
import Odometer from "react-odometerjs";

import "odometer/themes/odometer-theme-default.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      odometerValue: 0
    };
  }

  componentDidMount() {
    this.setState({ odometerValue: 600 });
  }

  render() {
    const { odometerValue } = this.state;
    return (
      <div>
        <h2>Try out Odometer</h2>
        <p> With animation=count </p>
        <Odometer
          animation="count"
          format="d"
          duration={1000}
          value={odometerValue}
        />

        <br />
        <br />

        <p> Without animation=count </p>
        <Odometer format="d" duration={1000} value={odometerValue} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
