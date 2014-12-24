/** @jsx React.DOM */

var Pager = require('../');
var React = require('react');

// TODO with pager

function skipTo(page){
  alert(page + 1);
}

var pager = React.renderComponent(
  <Pager total={10} current={5} onSkipTo={skipTo}/>,
  document.getElementById('p2')
);