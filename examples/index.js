/** @jsx React.DOM */

var Pager = require('../');
var React = require('react');

// TODO with pager


var pager = React.renderComponent(
  <Pager total={10} current={5}/>,
  document.getElementById('p1')
);