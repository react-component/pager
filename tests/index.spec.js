/** @jsx React.DOM */

var expect = require('expect.js');
var Pager = require('../index');
var React = require('react');
var sinon = require('sinon');
var $ = require('jquery');
var simulateDomEvent = require('simulate-dom-event');

$('<div id="t1"></div>').appendTo('body');
$('<div id="t2"></div>').appendTo('body');
$('<div id="t3"></div>').appendTo('body');
$('<div id="t4"></div>').appendTo('body');
$('<div id="t5"></div>').appendTo('body');

$('<div id="t6"></div>').appendTo('body');


$('<div id="t7"></div>').appendTo('body');

$('<div id="t8"></div>').appendTo('body');



 var total = 10;
describe('rc-pager', function () {
   
    var current = 3;


    var pager = React.renderComponent(
        <Pager total={total} current={current}/>,
        document.getElementById('t1')
    );

    var node = $('#t1');
    it('create', function () {
        expect(node.children().length).not.to.be(0);
    });

    it('page struct', function () {
        expect(node.find('.pagination').length).to.be(1);

        expect(node.find('li').length).not.to.be(0);
    });

    it('page current',function () {

        expect(pager.props.current).to.be(current);
        expect(pager.props.total).to.be(total);

        expect(node.find('.active').text()).to.be((current + 1).toString());
    });


    describe('rc-pager chang init', function () {
        it('init current last', function () {
            var current = 9,
                node = $('#t2');
            React.renderComponent(
                <Pager total={total} current={current}/>,
                document.getElementById('t2')
            );

            expect(node.find('.active').text()).to.be((current + 1).toString());
            expect(node.find('li').last().hasClass('disabled')).to.be(true);
        });

        it('current first', function () {
            var current = 0,
                node = $('#t3');
            React.renderComponent(
                <Pager total={total} current={current}/>,
                document.getElementById('t3')
            );

            expect(node.find('.active').text()).to.be((current + 1).toString());
            expect(node.find('li').first().hasClass('disabled')).to.be(true);
        });

        it('skip to middle', function () {
            var current = 5,
                node = $('#t4');
            React.renderComponent(
                <Pager total={total} current={current}/>,
                document.getElementById('t4')
            );

            expect(node.find('.active').text()).to.be((current + 1).toString());
            expect(node.find('li').first().hasClass('disabled')).to.be(false);
            expect(node.find('li').last().hasClass('disabled')).to.be(false);

        });

        it('skip to second', function () {
            var current = 1,
                node = $('#t6');
            React.renderComponent(
                <Pager total={total} current={current}/>,
                document.getElementById('t6')
            );

            expect(node.find('.active').text()).to.be((current + 1).toString());
            expect(node.find('li').first().hasClass('disabled')).to.be(false);
            expect(node.find('li').last().hasClass('disabled')).to.be(false);

        });

        it('skip to last - 1', function () {
            var current = 7,
                node = $('#t7');
            React.renderComponent(
                <Pager total={total} current={current}/>,
                document.getElementById('t7')
            );

            expect(node.find('.active').text()).to.be((current + 1).toString());
            expect(node.find('li').first().hasClass('disabled')).to.be(false);
            expect(node.find('li').last().hasClass('disabled')).to.be(false);

        });

    });
    describe('test event',function  () {

        var node = $('#t5');
        var callback = sinon.spy();
        React.renderComponent(
            <Pager total={total} current={0} onSkipTo={callback}/>,
            document.getElementById('t5')
        );

        it('test event', function () {
            
            var last = node.find('li').last()[0];
            simulateDomEvent(last,'click',{
                which:2
            });
            expect(callback.called).to.be(true);

        });

        it('test first ',function() {
            callback.called = false;
            var first = node.find('li').first()[0];
            simulateDomEvent(first,'click',{
                which:2
            });
            expect(callback.called).to.be(false);

            var second = node.find('li')[1];
            simulateDomEvent(first,'click',{
                which:2
            });

            expect(callback.called).to.be(false);

            var ellipsis = node.find('li')[4];
            simulateDomEvent(ellipsis,'click',{
                which:2
            });

            expect(callback.called).to.be(false);
        });
    })
    
   

    
});
