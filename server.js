var jsx = require('koa-jsx');
var jscoverHandler = require('koa-node-jscover');
var jscoverCoveralls = require('node-jscover-coveralls/lib/koa');

require('spm-server')(__dirname)
  .combo()
  .use(jscoverHandler({
    onlyLoad: function () {
        return 1;
    },
    next: function () {
        return 1;
    }
  }))
  .use(jsx(__dirname, {
    reactTools: require('react-tools'),
    next: function () {
        return 1;
    }
  }))
  .use(jscoverHandler({
    jscover: require('node-jscover'),
    next: function () {
        return 1;
    }
  }))
  .use(jscoverCoveralls())
  .spm()
  .directory()
  .cdn()
  .static()
  .listen(8000);
