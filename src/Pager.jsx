'use strict';

var React = require('react');

class PagerItem extends React.Component {
  handleClick(ev) {
    ev.preventDefault();
    if (!this.props.active && !this.props.disabled) {
      this.props.skipTo(this.props.page);
    }
  }

  render() {
    var status = this.props.active ? 'rc-pager-item-active' : '';
    if (this.props.disabled) {
      status += ' rc-pager-item-disabled';
    }
    return (<li onClick={this.handleClick.bind(this)} className={status}>
      <a href="#">{this.props.text}</a>
    </li>);
  }
}

/**
 * @private
 * 命令子项
 */
class CmdItem extends React.Component {
  handleClick(ev) {
    ev.preventDefault();
    if (!this.props.disabled) {
      this.props.skipTo(this.props.page);
    }
  }

  render() {
    var disabled = this.props.disabled ? 'rc-pager-item-disabled' : '';
    return (<li onClick={this.handleClick.bind(this)} className={disabled}>
      <a href="#">
        <span aria-hidden="true">{this.props.text}</span>
      </a>
    </li>);
  }
}

//分页栏
class Pager extends React.Component {
  constructor(props) {
    super(props);
    this.skipTo = this.skipTo.bind(this);
  }

  //获取首页按钮
  _getFirstItem() {
    var self = this,
      props = self.props,
      current = props.current,
      disabled = current === 0,
      label = props.previousLabel || '«';

    return <CmdItem disabled={disabled} text={label} skipTo={this.skipTo} page={current - 1}/>;
  }

  //获取最后一页按钮
  _getLastItem() {
    var self = this,
      total = self.props.total,
      current = self.props.current,
      disabled = current === total - 1,
      label = self.props.nextLabel || '»';

    return <CmdItem disabled={disabled} text={label} skipTo={this.skipTo} page={current + 1}/>;
  }

  //获取所有数字按钮
  _getItems() {
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
      rst.push(<PagerItem text={1} skipTo={this.skipTo} page={0} key="start"/>);
      if (from > 1) {
        rst.push(<PagerItem text="..." disabled={true} key="ellipsis-start"/>);
      }
    }

    for (var i = from; i <= to; i++) {
      active = current === i;
      rst.push(<PagerItem text={i + 1} active={active} skipTo={this.skipTo} page={i} key={i}/>);
    }

    if (to < total - 1) {
      active = current === total - 1;
      if (to < total - 2) {
        rst.push(<PagerItem text="..." disabled={true} key="ellipsis-end"/>);
      }
      rst.push(<PagerItem text={total} skipTo={this.skipTo} page={total - 1} key="end"/>);
    }
    return rst;
  }

  /**
   * 跳转到对应的节点
   * @param  {Number} page 页码
   */
  skipTo(page) {
    var handler = this.props.onSkipTo;
    if (handler) {
      handler(page);
    }
  }

  render() {
    var self = this,
      first = self._getFirstItem(),
      last = self._getLastItem(),
      items = self._getItems();

    var className = 'rc-pager';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }

    return (
      <ul className={className}>
        {first}
        {items}
        {last}
      </ul>
    );
  }
}

module.exports = Pager;
