import React from "react";

/**
 * 这是一个容器组件,拥有自己的内部状态
 * 
 */
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h2>容器组件:{this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
export default Clock;
