/** @jsx React.DOM */

var React = require('react');

/**
 * @private
 * 分页子项
 *
 */

var PagerItem = React.createClass({
  handlClick: function (ev) {
    ev.preventDefault();
    if (!this.props.active && !this.props.disabled) {
      this.props.skipTo(this.props.page);
    }
  },
  render: function () {
    var status = this.props.active ? 'active' : '';
    if (this.props.disabled) {
      status += ' disabled';
    }
    return (<li onClick={this.handlClick} className={status}>
      <a href="#">{this.props.text}</a>
    </li>);
  }
});

/**
 * @private
 * 命令子项
 */
var CmdItem = React.createClass({
  handlClick: function (ev) {
    ev.preventDefault();
    if (!this.props.disabled) {
      this.props.skipTo(this.props.page);
    }
  },
  render: function () {
    var disabled = this.props.disabled ? 'disabled' : '';
    return (<li onClick={this.handlClick} className={disabled}>
      <a href="#">
        <span aria-hidden="true">{this.props.text}</span>
      </a>
    </li>);
  }
});

//分页栏
var Pager = React.createClass({
  //获取首页按钮
  _getFirstItem: function () {
    var self = this,
      current = self.props.current,
      disabled = current === 0;

    return <CmdItem disabled={disabled} text="&laquo;" skipTo={this.skipTo} page={current - 1}/>;
  },
  //获取最后一页按钮
  _getLastItem: function () {
    var self = this,
      total = self.props.total,
      current = self.props.current,
      disabled = current === total - 1;

    return <CmdItem disabled={disabled} text="&raquo;" skipTo={this.skipTo} page={current + 1}/>;
  },
  //获取所有数字按钮
  _getItems: function () {
    var self = this,
      total = self.props.total,
      current = self.props.current,
      rst = [],
      from = 0,
      active,
      skip = 2,
      to = total - 1;

    if (current > skip) {
      from = current - skip;
    }
    if (total - current > skip) {
      to = current + skip;
    }
    if (from !== 0) {
      rst.push(<PagerItem text={1} skipTo={this.skipTo} page={0}/>);
      if (from > 1) {
        rst.push(<PagerItem text="..." disabled={true}/>);
      }
    }

    for (var i = from; i <= to; i++) {
      active = current === i;
      rst.push(<PagerItem text={i + 1} active={active} skipTo={this.skipTo} page={i}/>);
    }

    if (to < total - 1) {
      active = current === total - 1;
      if (to < total - 2) {
        rst.push(<PagerItem text="..." disabled={true}/>);
      }
      rst.push(<PagerItem text={total} skipTo={this.skipTo} page={total - 1}/>);
    }
    return rst;
  },
  /**
   * 跳转到对应的节点
   * @param  {Number} page 页码
   */
  skipTo: function (page) {
    var handler = this.props.onSkipTo;
    if (handler) {
      handler(page);
    }
  },

  render: function () {
    var self = this,
      first = self._getFirstItem(),
      last = self._getLastItem(),
      items = self._getItems();

    return (
      <ul className="pagination" onClick={this.onHandleClick}>
        {first}
        {items}
        {last}
      </ul>
    );
  }
});

module.exports = Pager;
