'use strict';

var React = require('react');
var Pager = require('rc-pager');

require('rc-pager/assets/bootstrap.css');

class MyControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  handleSkip(page) {
    this.setState({
      current: page
    });

    if (this.props.onSkipTo) {
      this.props.onSkipTo(page);
    }
  }

  render() {
    return (
      <div>
        <Pager total={this.props.total}
          previousLabel="prev"
          nextLabel="next"
          current={this.state.current}
          onSkipTo={this.handleSkip.bind(this)}/>
      </div>
    );
  }
}

React.render(
  <div>
    <h1>simple pager</h1>
    <MyControl total={10}/>
  </div>,
  document.getElementById('__react-content')
);
