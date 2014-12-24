/** @jsx React.DOM */

var Pager = require('../');
var React = require('react');

// TODO with pager


var MyControl = React.createClass({

  getInitialState: function () {
    return {
      current : 0
    };
  },

  handleSkip : function(page){
    //To Do
    this.setState({
      current : page
    });

    if(this.props.onSkipTo){
      this.props.onSkipTo(page);
    }
  },
  render : function  () {
    return (
      <div>
        <Pager total={this.props.total} current={this.state.current} onSkipTo={this.handleSkip}/>
      </div>
    );
  }
});

var control = React.renderComponent(
  <MyControl total={10}/>,
  document.getElementById('p3')
);