/** @jsx React.DOM */

var expect = require('expect.js');
var Pager = require('../index');
var React = require('react');
var $ = require('jquery');
var simulateDomEvent = require('simulate-dom-event');

$('<div id="t1"></div>').appendTo('body');

describe('rc-pager', function () {
    React.renderComponent(
        <Pager total={10} current={3}/>,
        document.getElementById('t1')
    );

    it('create', function () {
        simulateDomEvent(document.body, 'click');
        expect(1).to.be(1);
    });

    it('page numbers', function () {

    });

    it('skip to first', function () {

    });

    it('skip to last', function () {

    });

    it('skip to middle', function () {

    });

    it('test event', function () {
        // body...
    })
});
