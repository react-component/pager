webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	var Pager = __webpack_require__(3);

	__webpack_require__(5);

	var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){MyControl[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;MyControl.prototype=Object.create(____SuperProtoOf____Class0);MyControl.prototype.constructor=MyControl;MyControl.__superConstructor__=____Class0;
	  function MyControl(props) {"use strict";
	    ____Class0.call(this,props);
	    this.state = {
	      current: 0
	    };
	  }

	  Object.defineProperty(MyControl.prototype,"handleSkip",{writable:true,configurable:true,value:function(page) {"use strict";
	    this.setState({
	      current: page
	    });

	    if (this.props.onSkipTo) {
	      this.props.onSkipTo(page);
	    }
	  }});

	  Object.defineProperty(MyControl.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
	    return (
	      React.createElement("div", null, 
	        React.createElement(Pager, {total: this.props.total, current: this.state.current, onSkipTo: this.handleSkip.bind(this)})
	      )
	    );
	  }});


	React.render(
	  React.createElement("div", null, 
	    React.createElement("h1", null, "simple pager"), 
	    React.createElement(MyControl, {total: 10})
	  ),
	  document.getElementById('__react-content')
	);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var React = __webpack_require__(2);

	var ____Class1=React.Component;for(var ____Class1____Key in ____Class1){if(____Class1.hasOwnProperty(____Class1____Key)){PagerItem[____Class1____Key]=____Class1[____Class1____Key];}}var ____SuperProtoOf____Class1=____Class1===null?null:____Class1.prototype;PagerItem.prototype=Object.create(____SuperProtoOf____Class1);PagerItem.prototype.constructor=PagerItem;PagerItem.__superConstructor__=____Class1;function PagerItem(){"use strict";if(____Class1!==null){____Class1.apply(this,arguments);}}
	  Object.defineProperty(PagerItem.prototype,"handleClick",{writable:true,configurable:true,value:function(ev) {"use strict";
	    ev.preventDefault();
	    if (!this.props.active && !this.props.disabled) {
	      this.props.skipTo(this.props.page);
	    }
	  }});

	  Object.defineProperty(PagerItem.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
	    var status = this.props.active ? 'rc-pager-item-active' : '';
	    if (this.props.disabled) {
	      status += ' rc-pager-item-disabled';
	    }
	    return (React.createElement("li", {onClick: this.handleClick.bind(this), className: status}, 
	      React.createElement("a", {href: "#"}, this.props.text)
	    ));
	  }});


	/**
	 * @private
	 * 命令子项
	 */
	var ____Class2=React.Component;for(var ____Class2____Key in ____Class2){if(____Class2.hasOwnProperty(____Class2____Key)){CmdItem[____Class2____Key]=____Class2[____Class2____Key];}}var ____SuperProtoOf____Class2=____Class2===null?null:____Class2.prototype;CmdItem.prototype=Object.create(____SuperProtoOf____Class2);CmdItem.prototype.constructor=CmdItem;CmdItem.__superConstructor__=____Class2;function CmdItem(){"use strict";if(____Class2!==null){____Class2.apply(this,arguments);}}
	  Object.defineProperty(CmdItem.prototype,"handleClick",{writable:true,configurable:true,value:function(ev) {"use strict";
	    ev.preventDefault();
	    if (!this.props.disabled) {
	      this.props.skipTo(this.props.page);
	    }
	  }});

	  Object.defineProperty(CmdItem.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
	    var disabled = this.props.disabled ? 'rc-pager-item-disabled' : '';
	    return (React.createElement("li", {onClick: this.handleClick.bind(this), className: disabled}, 
	      React.createElement("a", {href: "#"}, 
	        React.createElement("span", {"aria-hidden": "true"}, this.props.text)
	      )
	    ));
	  }});


	//分页栏
	var ____Class3=React.Component;for(var ____Class3____Key in ____Class3){if(____Class3.hasOwnProperty(____Class3____Key)){Pager[____Class3____Key]=____Class3[____Class3____Key];}}var ____SuperProtoOf____Class3=____Class3===null?null:____Class3.prototype;Pager.prototype=Object.create(____SuperProtoOf____Class3);Pager.prototype.constructor=Pager;Pager.__superConstructor__=____Class3;
	  function Pager(props) {"use strict";
	    ____Class3.call(this,props);
	    this.skipTo = this.skipTo.bind(this);
	  }

	  //获取首页按钮
	  Object.defineProperty(Pager.prototype,"$Pager_getFirstItem",{writable:true,configurable:true,value:function() {"use strict";
	    var self = this,
	      current = self.props.current,
	      disabled = current === 0;

	    return React.createElement(CmdItem, {disabled: disabled, text: "«", skipTo: this.skipTo, page: current - 1});
	  }});

	  //获取最后一页按钮
	  Object.defineProperty(Pager.prototype,"$Pager_getLastItem",{writable:true,configurable:true,value:function() {"use strict";
	    var self = this,
	      total = self.props.total,
	      current = self.props.current,
	      disabled = current === total - 1;

	    return React.createElement(CmdItem, {disabled: disabled, text: "»", skipTo: this.skipTo, page: current + 1});
	  }});

	  //获取所有数字按钮
	  Object.defineProperty(Pager.prototype,"$Pager_getItems",{writable:true,configurable:true,value:function() {"use strict";
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
	      rst.push(React.createElement(PagerItem, {text: 1, skipTo: this.skipTo, page: 0}));
	      if (from > 1) {
	        rst.push(React.createElement(PagerItem, {text: "...", disabled: true}));
	      }
	    }

	    for (var i = from; i <= to; i++) {
	      active = current === i;
	      rst.push(React.createElement(PagerItem, {text: i + 1, active: active, skipTo: this.skipTo, page: i}));
	    }

	    if (to < total - 1) {
	      active = current === total - 1;
	      if (to < total - 2) {
	        rst.push(React.createElement(PagerItem, {text: "...", disabled: true}));
	      }
	      rst.push(React.createElement(PagerItem, {text: total, skipTo: this.skipTo, page: total - 1}));
	    }
	    return rst;
	  }});

	  /**
	   * 跳转到对应的节点
	   * @param  {Number} page 页码
	   */
	  Object.defineProperty(Pager.prototype,"skipTo",{writable:true,configurable:true,value:function(page) {"use strict";
	    var handler = this.props.onSkipTo;
	    if (handler) {
	      handler(page);
	    }
	  }});

	  Object.defineProperty(Pager.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
	    var self = this,
	      first = self.$Pager_getFirstItem(),
	      last = self.$Pager_getLastItem(),
	      items = self.$Pager_getItems();

	    var className = 'rc-pager';
	    if (this.props.className) {
	      className += ' ' + this.props.className;
	    }

	    return (
	      React.createElement("ul", {className: className}, 
	        first, 
	        items, 
	        last
	      )
	    );
	  }});


	module.exports = Pager;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/yiminghe/code/react-components/pager/node_modules/rc-tools/node_modules/css-loader/index.js!/Users/yiminghe/code/react-components/pager/assets/bootstrap.css", function() {
			var newContent = require("!!/Users/yiminghe/code/react-components/pager/node_modules/rc-tools/node_modules/css-loader/index.js!/Users/yiminghe/code/react-components/pager/assets/bootstrap.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	exports.push([module.id, ".rc-pager {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.rc-pager > li {\n  display: inline;\n}\n.rc-pager > li > a,\n.rc-pager > li > span {\n  position: relative;\n  float: left;\n  padding: 6px 12px;\n  margin-left: -1px;\n  line-height: 1.42857143;\n  color: #337ab7;\n  text-decoration: none;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n.rc-pager > li:first-child > a,\n.rc-pager > li:first-child > span {\n  margin-left: 0;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.rc-pager > li:last-child > a,\n.rc-pager > li:last-child > span {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.rc-pager > li > a:hover,\n.rc-pager > li > span:hover,\n.rc-pager > li > a:focus,\n.rc-pager > li > span:focus {\n  color: #23527c;\n  background-color: #eee;\n  border-color: #ddd;\n}\n.rc-pager > .rc-pager-item-active > a,\n.rc-pager > .rc-pager-item-active > span,\n.rc-pager > .rc-pager-item-active > a:hover,\n.rc-pager > .rc-pager-item-active > span:hover,\n.rc-pager > .rc-pager-item-active > a:focus,\n.rc-pager > .rc-pager-item-active > span:focus {\n  z-index: 2;\n  color: #fff;\n  cursor: default;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.rc-pager > .rc-pager-item-disabled > span,\n.rc-pager > .rc-pager-item-disabled > span:hover,\n.rc-pager > .rc-pager-item-disabled > span:focus,\n.rc-pager > .rc-pager-item-disabled > a,\n.rc-pager > .rc-pager-item-disabled > a:hover,\n.rc-pager > .rc-pager-item-disabled > a:focus {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #fff;\n  border-color: #ddd;\n}\n", ""]);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isIE9 = memoize(function() {
			return /msie 9\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isIE9();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ }
]);